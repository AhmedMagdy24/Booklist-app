// book class: represents a book 

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// ul class handle UI taks 

class UI {
    static displayBooks(){
        const storedBooks = [
        {
        title: 'book',
        author: 'Jordan Peterson',
        isbn: '4234252'
        },

        {
        title: 'Farm house',
        author: 'myself',
        isbn: '4234252'
        }
    ]

        const books = storedBooks

        books.forEach((book) => UI.addBookToList(book))
    }

   static addBookToList(book){
       const list = document.querySelector('#book-list')

       const row = document.createElement('tr')

       row.innerHTML=`
       <td>${book.title}</td>
       <td>${book.author}</td>
       <td>${book.isbn}</td>
       <td><a href="#" class="btn btn-danger btn-sm">Delete</a></td>`
       

       list.appendChild(row)
   } 

   static clearValues(){
    document.querySelector('#title').value = ''
    document.querySelector('#author').value = ''
    document.querySelector('#isbn').value = ''
   }
}


// store class: handles storge 

// events: display 
document.addEventListener('DOMContentLoaded', UI.displayBooks)




// event: add a book 

// create an event  to listen for the submit event 

document.querySelector('#book-form').addEventListener('submit', (e) =>{

// to prevent the page from loading 
e.preventDefault


// store the values from the input 

const title = document.querySelector('#title').value 
const author = document.querySelector('#author').value 
const isbn = document.querySelector('#isbn').value 

const book = new Book(title, author, isbn)

// to add the book to the UI 
UI.addBookToList(book)

// to clear the values after submit 

UI.clearValues()
})

// event: remove a book

