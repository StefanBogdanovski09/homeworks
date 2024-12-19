//Create OBJECT animal with 2 properties and 1 method:
// name
// kind
// speak (method)
// this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

const animal = {
    name: "Luna",
    kind: "Cat",
    speak: function (message) {
        console.log(`${this.kind} says: ${message}`);
    },
};

animal.speak("Mjau!!!");

//Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.
// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).

class Book {
    constructor(bookTitle, bookAuthor, bookReadingStatus) {
        this.title = bookTitle;
        this.author = bookAuthor;
        this.readingStatus = bookReadingStatus;
    }
    yourReadingStatus() {
        if (this.readingStatus === true) {
            console.log(`You alredy read ${this.title} by${this.author}`);
        } else {
            console.log(`You still need to read ${this.title} by ${this.author}`);
        }
    }
}
const myBook = new Book(`The Robots of dawn`, ` Isaac Asimov`, true);

myBook.yourReadingStatus();

const secondBook = new Book(
    `Mockingjay: The Final Book of The Hunger Games`,
    `Suzanne Collins`, false
);

secondBook.yourReadingStatus();