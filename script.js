const bookCardContainer = document.getElementById("book-card-container");

let myLibrary = [];

// Initialize the prototype for creating a book
function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = function () {
        if (hasRead) {
        return title + " by " + author + ", " + pages + " pages " + ", has read";
        } else {
            return title + " by " + author + ", " + pages + " pages " + ", not read yet";
        }
    }
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);

        const newCard = document.createElement("div");
        const newCardTitle = document.createElement("div");
        const newCardAuthor = document.createElement("div");
        const newCardPages = document.createElement("div");
        const hasReadNewCard = document.createElement("div");

        bookCardContainer.appendChild(newCard);
        newCard.appendChild(newCardTitle);
        newCard.appendChild(newCardAuthor);
        newCard.appendChild(newCardPages);
        newCard.appendChild(hasReadNewCard);

        newCard.classList.add("book-card");
        newCardTitle.classList.add("title");
        newCardAuthor.classList.add("author");
        newCardPages.classList.add("pages");
        hasReadNewCard.classList.add("has-read");

        newCardTitle.innerText = myBook.title;
        newCardAuthor.innerText = myBook.author;
        newCardPages.innerText = myBook.pages;
        if (myBook.hasRead) {
            hasReadNewCard.innerText = "Has Read";
        } else {
            hasReadNewCard.innerText = "Has Not Read";
        }
}

const myBook = new Book("Book", "Author", 243, false);
addBookToLibrary(myBook);
addBookToLibrary(myBook);
addBookToLibrary(myBook);
addBookToLibrary(myBook);

