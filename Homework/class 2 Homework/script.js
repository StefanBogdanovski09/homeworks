// Write javascript code that will get an input from the user and calculate which Chinese Zodiac a given year is in formula for Chinese Zodiac caluclation: (year - 4) % 12. 
// Possible values: 0 - Rat, 1 - Ox, 2 - Tiger, 3 - Rabbit, 4 - Dragon, 5 - Snake, 6 - Horse, 7 - Goat, 8 - Monkey, 9 - Rooster, 10 - Dog, 11 - Pig.

let year = prompt("Enter your year");
let convertedYear = parseInt(year);
// console.log(typeof convertedYear);
let zodiacIndex = (convertedYear - 4) % 12;
// console.log(typeof zodiacIndex);

if (zodiacIndex === 0) {
    console.log("rat");
} else if (zodiacIndex === 1) {
    console.log("ox");
} else if (zodiacIndex === 2) {
    console.log("tiger");
} else if (zodiacIndex === 3) {
    console.log("rabbit");
} else if (zodiacIndex === 4) {
    console.log("dragon");
} else if (zodiacIndex === 5) {
    console.log("snake");
} else if (zodiacIndex === 6) {
    console.log("horse");
} else if (zodiacIndex === 7) {
    console.log("goat");
} else if (zodiacIndex === 8) {
    console.log("monkey");
} else if (zodiacIndex === 9) {
    console.log("rooster");
} else if (zodiacIndex === 10) {
    console.log("dog");
} else if (zodiacIndex === 11) {
    console.log("pig");
}