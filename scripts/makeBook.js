const newBookButton = document.querySelector('.new-book-button')
const newBookInputContainer = document.querySelector('.new-book-input')
const newBookForm = document.querySelector('form')
const newBookInputContainerCloseButton = document.querySelector('#close')

const bookTitleInput = document.querySelector('#book-title')
const bookAuthorInput = document.querySelector('#book-author')
const bookPagesInput = document.querySelector('#book-pages')
const bookReadStatusInput = document.querySelector('#book-read-status')

const newBookInputContainerSubmit = document.querySelector('#submit')

const booksContainer = document.querySelector('.books-container')

let bookTitle = ''
let bookAuthor = ''
let bookPages = 0
let bookReadStatus = false

export const myLibrary = []

class Book {
    title
    author
    pages
    readStatus

    constructor(title, author, pages, readStatus) {
        this.title = title
        this.author = author
        this.pages = pages
        this.readStatus = readStatus
    }

    get title() { return title }
    get author() { return author }
    get pages() { return pages }
    get readStatus() { return readStatus }
}

function addBookToLibrary(title, author, pages, readStatus) {
    const newBook = new Book(title, author, pages, readStatus)

    myLibrary.push(newBook)
    console.log(myLibrary)
}

function setNewBookContainerDisplayState(state) {
    newBookInputContainer.style.display = state
}

function clearValues() {
    bookTitleInput.value = ''
    bookAuthorInput.value = ''
    bookPagesInput.value = ''
    bookReadStatusInput.value = 'false'

    bookTitle = ''
    bookAuthor = ''
    bookPages = 0
    bookReadStatus = false
}

newBookButton.addEventListener('click', () => {
    setNewBookContainerDisplayState('flex')
})

// create a new book through popup
newBookInputContainerSubmit.addEventListener('click', event => {
    if(newBookForm.checkValidity() === true) {
        event.preventDefault()

        bookTitle = bookTitleInput.value
        bookAuthor = bookAuthorInput.value
        bookPages = bookPagesInput.value == 0 ? 0 : bookPagesInput.value
        bookReadStatus = (bookReadStatusInput.value === 'true')

        addBookToLibrary(bookTitle, bookAuthor, bookPages, bookReadStatus)

        setNewBookContainerDisplayState('none')
        clearValues()
    }
})

newBookInputContainerCloseButton.addEventListener('click', () => {
    setNewBookContainerDisplayState('none')
    clearValues()
})