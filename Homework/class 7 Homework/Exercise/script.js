// Select the first div
const firstParagraph = document.getElementById("first");
console.log("First paragraph:", firstParagraph);

//Select all paragraphs
const allParagraphs = document.getElementsByTagName("p");
console.log("All <p> elements:", allParagraphs);

//Select the last div
const allDivs = document.querySelectorAll("div");
console.log(allDivs[allDivs.length - 1]);

//Select the header 3 in the last div
const theHeader = document.querySelector("h3");
console.log("The h3 header:", theHeader);

//Select the header 1 in the last div
const allHeaders = document.querySelector("h1");
console.log(allHeaders[allHeaders.length - 1]);

//Get the text from the first paragraph in the second div
const secondParagraph = document.getElementsByClassName("paragraph second");
console.log("Second div first paragraph:", secondParagraph);

// Add the word "text" to the text element in the second div
const textName = document.querySelector("text");
console.log(textName);
textName.textContent = "text";

//Change the text of the header 1 in the last div
allHeaders.textContent = "It is changed";
console.log(allHeaders);

//Ne mozam nikako da go targetiram posledniot h1

//Change the text of the header 3 in the last div
theHeader.textContent = "Changed";
console.log(theHeader);