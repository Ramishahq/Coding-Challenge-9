// Task 1: Create a Book Class
class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this._availabilityStatus = true;  // Renamed internal variable to avoid conflict
    }

    // Getter for availability
    get isAvailable() {
        return this._availabilityStatus;
    }

    // Setter for availability
    set isAvailable(status) {
        this._availabilityStatus = status;
    }

    // Method to display book details
    getDetails() {
        console.log(`Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}`);
    }
}

// Task 2: Create a Section Class
class Section {
    constructor(name) {
        this.name = name;  // Name of the section (e.g., "Fiction", "Romantic")
        this.books = [];   // Array to store Book objects
    }

    // Adding book object to the section
    addBook(book) {
        this.books.push(book);
    }

    // Return number of available books
    getAvailableBooks() {
        return this.books.filter(book => book.isAvailable).length;
    }

    // List all books in the section with their availability
    listBooks() {
        this.books.forEach(book => {
            console.log(`Title: ${book.title}, Availability: ${book.isAvailable ? "Available" : "Borrowed"}`);
        });
    }
}

// Creating Fiction Section and Romantic Section
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

// Marking one book as borrowed
fictionBook2.isAvailable = false;  // Brave New World is borrowed

// List all books in Fiction and Romantic section
console.log("Fiction Section Books:");
fictionSection.listBooks();
console.log("Romantic Section Books:");
romanticSection.listBooks();

// Get total available books in each section
console.log(`Available books in Fiction: ${fictionSection.getAvailableBooks()}`);
console.log(`Available books in Romantic: ${romanticSection.getAvailableBooks()}`);

// Task 3: Create a Patron class
class Patron {
    constructor(name) {
        this.name = name;
        this.borrowedBooks = [];
    }

    // Method to borrow a book
    borrowBook(book) {
        if (book.isAvailable) {
            this.borrowedBooks.push(book);
            book.isAvailable = false;  // Update book status to borrowed
            console.log(`${this.name} borrowed "${book.title}".`);
        } else {
            console.log(`${book.title} is not available at this time.`);
        }
    }

    // Use your provided returnBook method
    returnBook(book) {
        let found = false;
        for (let i = 0; i < this.borrowedBooks.length; i++) {
            if (this.borrowedBooks[i] === book) {
                this.borrowedBooks[i].isAvailable = true;
                console.log(`${this.name} returned "${book.title}"`);
                found = true;
                this.borrowedBooks = this.borrowedBooks.filter(b => b !== book);
                break;
            }
        }
        if (!found) {
            console.log(`${this.name} doesn't have "${book.title}" borrowed.`);
        }
    }
}

// Example usage:

// Create a patron
let patron1 = new Patron("Alice");

// Borrowing books
patron1.borrowBook(fictionBook1);  // Alice borrows 1984
patron1.borrowBook(fictionBook2);  // Alice tries to borrow Brave New World (unavailable)

// Returning books using your method
patron1.returnBook(fictionBook1);  // Alice returns 1984
patron1.returnBook(fictionBook2);  // Alice tries to return Brave New World (which she didn't borrow)
