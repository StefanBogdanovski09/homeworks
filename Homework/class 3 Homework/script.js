//Student Exercise - #3. The Age CalculatorForgot how old you are? Calculate it!Write a function named calculateAge that:takes 2 arguments: birth year, current year. Calculates the age based on those years.outputs the result to the screen like so: "You are NN years old"Call the function three times with different sets of values.
function calculateAge(birthYear, currentYear = 2024) {

    let result = currentYear - birthYear
    console.log(`You are ${result} years old`);
    return result;
}
calculateAge(1999, 2024);
calculateAge(2005);
calculateAge(1971);

//Write a JavaScript function which accepts a parameter and returns its type and prints it in the console. Try to call the functions 5 times for 5 different types:
// object
// boolean
// number
// string
// undefined

function perimetar(input) {
    console.log(typeof input);
    return typeof input;
}
perimetar([]);
perimetar(false);
perimetar(25);
perimetar("Stefan");
perimetar(undefined);



//Write a JavaScript function that will return:
// Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
// Note: Call the function in console to see answer

function dogCalculate(dogYear, humanYear = 7) {
    let result = dogYear * humanYear;
    console.log(`Your dog is ${result} years old`);
    return result;
}
dogCalculate(5);
dogCalculate(12);

// Bonus: Make the same function work for converting dog to human years as well

function humanCalculate(humanAge, dogAge = 7) {
    let result = humanAge / dogAge;
    console.log(`Your dog is ${result} years old.`)
}
humanCalculate(49);

//Write a javascript function for an ATM:
// The ATM should give cash
// Should return "Not enough money" if you request more money
// Should return the ammount withdrawn and money left on the account if you have enough
// Note: Hardcode your account money in the program
// Bonus: Make it work with prompt()!

let accountBalance = 1000;
function atmWithdreaw() {
    let withdrawAmount = parseFloat(
        prompt("Enter the amount you want to withdraw")
    );
    if (withdrawAmount > accountBalance) {
        return `Not enough money your balance is ${accountBalance}`;
    } else {
        accountBalance -= withdrawAmount;
        return `you have withdraw ${withdrawAmount} your remaining balance is ${accountBalance}`;
    }
}
console.log(atmWithdreaw());