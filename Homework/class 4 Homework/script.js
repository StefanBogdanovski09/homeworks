// Create a function called tellStory()
// The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )
// The function should return one big string with a story made from the arguments
// Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.
// The value that is returned from the function should be printed in the console or in alert


function tellStory(name, activity, mood) {
    let yourName = name
    let yourActivity = activity
    let yourMood = mood
    let yourStory = `My name is ${yourName}. I am so ${yourMood}, because today i am ${yourActivity} football. It's final match.`;
    console.log(yourStory);
}

tellStory("Stefan", "playing", "exited");

//Write a function that will take an array of 5 numbers as an argument and return the sum.
// Print it in the console or in alert

function arrayOfFiveNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

let numbers = [2, 4, 6, 8, 10];
let value = arrayOfFiveNumbers(numbers);
console.log(value);

//Write a javascript function that:
// When given any array of strings (should work with array with any number of elements)
// It will create one big string and return it
// Ex:["Hello", "there", "students", "of", "SEDC", "!"]
// Result: "Hello there students of SEDC!"

function arrayOfStrings(array) {
    return array.join(" ");
}

const result = arrayOfStrings(["Hello", "there", "students", "of", "SEDC!"]);
console.log(result);

// Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, and will add the "\n" new line after every even number otherwise it will add " " empty space.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (let numbers of array) {
    console.log(numbers);
}

//Write a JavaScript function that will return:
// The sum of the MAX and MIN numbers from an array with numbers
// Ex: arr = [3, 5, 6, 8, 11]
// Output: Max: 11, Min: 3, Sum: 14

function numberArray(arr) {
    let sum = 0;
    for (i = 0; i < arr.lenght; i++) {
        sum += arr[i];
    }
    let minValue = Math.min(...arr);
    let maxValue = Math.max(...arr);
    console.log("Min element is " + minValue);
    console.log("Max element is " + maxValue);
    console.log("The sum is " + sum);
}
let numberss = [3, 5, 6, 8, 11];
numberArray(numberss);

//Write a javascript function that:
// When given 2 arrays of students firstNames and lastNames will return a new array with students full names
// Every name should have a numeric value before it
// Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
// Result: full = ["1. Bob Gregory", "2. Jill Wur


function getFullNames(firstName, lastName) {
    let fullNames = [];
    for (let i = 0; i < firstName.length; i++) {
        fullNames.push(`${i + 1}. ${firstName[i]} ${lastName[i]}`);
    }
    return fullNames;
}
let first = ["Bob", "jill"];
let last = ["Grefory", "Wurtz"];
let results = getFullNames(first, last);
console.log(results);