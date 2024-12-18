// 1. Write a JavaScript program that calculates the total price of 30 Phones, where the price of one phone is $119.95 and the tax rate is 5%. Print the result in the console.
let onePhoneInDollars = 119.95;
let phones = 30;
let taxesPercentage = 5;
let priceNoTax = onePhoneInDollars * phones;
let tax = (priceNoTax * taxesPercentage) / 100;
let totalPrice = priceNoTax + tax;
console.log(totalPrice);

// 2.Write a JavaScript program that takes minutes and converts them to seconds. Print the result in the console.
let minutes = 10;
let oneSecond = 60;
let result = minutes * oneSecond;
console.log(result);

// 3.Write a JavaScript program that takes a number and increments the number by +1 and prints the result in the console.
let number = 23;
let result1 = number + 1;
console.log(result1);

// 4.Write a JavaScript program that takes the base and height of a triangle and calculates its area. Print the result in the console.
let base = 4;
let height = 6;
let area = (base * height) / 2;
console.log(area);

// 5.Write a JavaScript program that takes length and width of a rectangle and finds its perimeter. Print the result in the console.
let lenght = 4;
let witdh = 5;
let perimetar = 2 * (lenght + witdh);
console.log(perimetar);

// 6.Write a JavaScript program that will calculate area of circle. Print the result in the console.
let radius = 9;
let value = Math.PI;
let areOfCircle = value * radius * radius;
console.log(areOfCircle);