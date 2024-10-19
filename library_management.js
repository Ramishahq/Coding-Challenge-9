// // Task 1: Create a Book Class

class Book {
    constructor (title, author, ISBN, _isAvailable) {
        this.title = title
        this.author = author
        this.ISBN = ISBN
        this._isAvailable = true  
    }
    
    get _isAvailable () {
        return this._isAvailableStatus
    }
    
    set _isAvailable (status) {
        this._isAvailableStatus = status
    }
    getDetails() {
        console.log (`Title: ${this.title}, Author: ${this.position}, ISBN: ${this.ISBN}`)
    }}
// Task 2 Create a Section Class
class Section {
    constructor(name) {
        this.name = name;  // Name of the section (e.g., "Fiction", "Romantic")
        this.books = [];   // Array to store Book objects
    }
// Adding book object to the section

addBook(book) {
    this.books.push(book);
}
getAvailableBooks() {
    return this.books.filter(book => book._isAvailable).length; // return no. of availble books in the genre
} 
listBooks() {
    this.books.forEach(book => {
        console.log(`Title: ${book.title}, Availability: ${book._isAvailable ? "Available" : "Borrowed"}`);
    });
}
}
// Createing Fiction Section and Romantic Section
let fictionSection = new Section("Fiction");
let romanticSection = new Section("Romantic");

let fictionBook1 = new Book("1984", "George Orwell", "1234567890");
let fictionBook2 = new Book("Brave New World", "Aldous Huxley", "0987654321");


let romanticBook1 = new Book("Pride and Prejudice", "Jane Austen", "1122334455");
let romanticBook2 = new Book("The Notebook", "Nicholas Sparks", "6677889900");

// Adding two genres books 
fictionSection.addBook(fictionBook1);
fictionSection.addBook(fictionBook2);

romanticSection.addBook(romanticBook1);
romanticSection.addBook(romanticBook2);

// stating one book as borrowed
fictionBook2._isAvailable = false;  

// List all books in Fiction and Romantic section
console.log("Fiction Section Books:");
fictionSection.listBooks();
console.log("Romantic Section Books:");
romanticSection.listBooks();

// Get total available books in each section
console.log(`Available books in Fiction: ${fictionSection.getAvailableBooks()}`);  

console.log(`Available books in Romantic: ${romanticSection.getAvailableBooks()}`);  


// Fiction Section Books:
// Title: 1984, Availability: Available
// Title: Brave New World, Availability: Borrowed
// Romantic Section Books:
// Title: Pride and Prejudice, Availability: Available
// Title: The Notebook, Availability: Available
// Available books in Fiction: 1
// Available books in Romantic: 2
