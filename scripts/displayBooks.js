import { myLibrary } from "./makeBook.js";

const booksContainer = document.querySelector('.books-container')
const newBookInputContainerSubmit = document.querySelector('#submit')

newBookInputContainerSubmit.addEventListener('click', () => {
    booksContainer.innerHTML = ''

    let counter = 0;

    myLibrary.forEach(book => {
        const div = document.createElement('div')
        div.classList.add('book')
        div.id = counter
    
        const h2 = document.createElement('h2')
        h2.textContent = 'Book Title: ' + book.title
        h2.classList.add('book-title')
    
        const h3 = document.createElement('h3')
        h3.textContent = 'Book Author: ' + book.author
        h3.classList.add('book-author')
    
        const h4 = document.createElement('h4')
        h4.textContent = 'Book Pages: ' + book.pages
        h4.classList.add('book-pages')
    
        const h6 = document.createElement('h6')
        h6.innerHTML = 'Read Status: <select><option value="true">True</option><option value="false" selected>False</option></select>'
        h6.classList.add('read-status')
    
        const button = document.createElement('button')
        button.textContent = 'X'
        button.classList.add('delete')
        button.id = counter

        button.addEventListener('click', () => {
            console.log('button ID: ' + button.id)


            const books = document.querySelectorAll('.book')
        
            books.forEach(book => {
                if(book.id == button.id) {
                    console.log('book ID: ' + book.id)
                    booksContainer.removeChild(book)
                    myLibrary.splice(button.id, book.id + 1)

                    console.log(myLibrary)
                }
            })
        })
    
        div.append(h2, h3, h4, h6, button)
        booksContainer.appendChild(div)

        counter++
    })
})