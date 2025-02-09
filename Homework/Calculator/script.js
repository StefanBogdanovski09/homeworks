let total = 0;
let holder = "0";
let previousOperator = null;

let display = document.querySelector(".display");

function btnClick(value) {
    if (isNaN(value)) {
        sortSymbol(value);
    } else {
        sortNumber(value);
    }
    display.innerText = holder;
}

function sortSymbol(symbol) {
    switch (symbol) {
        case "C":
            holder = "0";
            total = 0;
            previousOperator = null;
            break;
        case "=":
            if (previousOperator === null) {
                return;
            }
            sortOperation(parseInt(holder));
            previousOperator = null;
            holder = total.toString();
            total = 0;
            break;
        case "←":
            if (holder.length === 1) {
                holder = "0";
            } else {
                holder = holder.substring(0, holder.length - 1);
            }
            break;
        case "+":
        case "-":
        case "×":
        case "÷":
            handleMath(symbol);
            break;
    }
}

function handleMath(symbol) {
    if (holder === "0") {
        return;
    }
    let intHolder = parseInt(holder);
    if (total === 0) {
        total = intHolder;
    } else {
        sortOperation(intHolder);
    }
    previousOperator = symbol;
    holder = "0";
}

function sortOperation(intHolder) {
    if (previousOperator === "+") {
        total += intHolder;
    } else if (previousOperator === "-") {
        total -= intHolder;
    } else if (previousOperator === "×") {
        total *= intHolder;
    } else if (previousOperator === "÷") {
        total /= intHolder;
    }
}

function sortNumber(numberString) {
    if (holder === "0") {
        holder = numberString;
    } else {
        holder += numberString;
    }
}

function init() {
    document
        .querySelectorAll(".calcButton, .topButtons, .lowButtons")
        .forEach((button) => {
            button.addEventListener("click", function (event) {
                btnClick(event.target.innerText);
            });
        });
}

init();