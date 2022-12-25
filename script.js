const bookCardContainer = document.getElementById("book-card-container");
const addBookButton = document.getElementById("add-book-button");
const addBookInterface = document.getElementById("add-book-interface");
const overlayDiv = document.getElementById("overlay-div");
const exitAddBookInterfaceButton = document.getElementById("exit-add-book-interface");
const submitButton = document.getElementById("submit-button");
const inputs = document.querySelectorAll(".input");
const hasReads = document.getElementsByClassName("has-read");

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
      return (
        title + " by " + author + ", " + pages + " pages " + ", not read yet"
      );
    }
  };
}

addBookButton.addEventListener("click", function () {
  addBookInterface.classList.remove("invisible");
  overlayDiv.classList.add("active-overlay");
});

exitAddBookInterfaceButton.addEventListener("click", function () {
  addBookInterface.classList.add("invisible");
  overlayDiv.classList.remove("active-overlay");
});

submitButton.addEventListener("click", addBookClick, false);
submitButton.addEventListener("click", createNewBookObject);

function addBookClick(event) {
  addBookInterface.classList.add("invisible");
  overlayDiv.classList.remove("active-overlay");
  event.preventDefault();
}

function createNewBookObject() {
    const title = inputs[0].value;
    const author = inputs[1].value;
    const pages = inputs[2].value;
  
    if (title === "" || author === "" || pages === "") {
      // Display an error message to the user
      alert("Must fill out fields correctly!");
      return;
    }
  
    const theNewBook = new Book(title, author, pages, false);
    addBookToLibrary(theNewBook);
  }

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);

  const newCard = document.createElement("div");
  const newCardTitle = document.createElement("div");
  const newCardAuthor = document.createElement("div");
  const newCardPages = document.createElement("div");
  const hasReadNewCard = document.createElement("button");

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

  newCardTitle.innerText = newBook.title;
  newCardAuthor.innerText = newBook.author;
  newCardPages.innerText = newBook.pages;
  if (newBook.hasRead) {
    hasReadNewCard.innerText = "Has Read";
  } else {
    hasReadNewCard.innerText = "Has Not Read";
  }

  for (let i = 0; i < hasReads.length; i++) {
    hasReads[i].addEventListener("click", function() {
        if (!myLibrary[i].hasRead) {
            myLibrary[i].hasRead = true;
            hasReads[i].innerText = "Has Read";
        }
        else {
            myLibrary[i].hasRead = false;
            hasReads[i].innerText ="Has Not Read";
        }
    })
}
}

