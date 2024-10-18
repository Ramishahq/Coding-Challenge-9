// Task 1: Create a Book Class

class Book {
    constructor (title, author, ISBN, _isAvailable) {
        this.title = title
        this.author = author
        this.ISBN = ISBN
        this._isAvailable = true  
    }
    
    get _isAvailable () {
        return this._isAvailable
    }
    
    set _isAvailable (status) {
        this._isAvailable = status
    }
    getDetails() {
        console.log (`Title: ${this.title}, Author: ${this.position}, ISBN: ${this.ISBN}`)
    }}
