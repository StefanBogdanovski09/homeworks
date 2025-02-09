let finalResult;

function weightInChickens() {
    let inputKilos = prompt("Enter how much weight in kg");
    let convertedKilos = parseInt(inputKilos);
    finalResult = convertedKilos / 0.5;
    console.log(finalResult);
}
weightInChickens();

let finSumCheck = document.getElementById("result");
finSumCheck.textContent += `${finalResult} kilograms`;