const bookCardContainer = document.getElementById("book-card-container");
const addBookButton = document.getElementById("add-book-button");
const addBookInterface = document.getElementById("add-book-interface");
const overlayDiv = document.getElementById("overlay-div");
const exitAddBookInterfaceButton = document.getElementById("exit-add-book-interface");
const submitButton = document.getElementById("submit-button");
const inputs = document.querySelectorAll(".input");
const hasReads = document.getElementsByClassName("has-read");
const cardRemovers = document.getElementsByClassName("remove-card");

// Initialize an array to store the books in the library
let myLibrary = [];

// Initialize the prototype for creating a book
function Book(title, author, pages, hasRead) {
  // Properties of a book object
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
  // Method to generate a string representation of the book
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

// Event listener for when the "Add Book" button is clicked
addBookButton.addEventListener("click", function () {
  // Show the add book interface and the overlay div
  addBookInterface.classList.remove("invisible");
  overlayDiv.classList.add("active-overlay");
});

// Event listener for when the "X" button is clicked on the add book interface
exitAddBookInterfaceButton.addEventListener("click", function () {
  // Hide the add book interface and the overlay div
  addBookInterface.classList.add("invisible");
  overlayDiv.classList.remove("active-overlay");
});

// Event listener for when the submit button is clicked
submitButton.addEventListener("click", addBookClick, false);
submitButton.addEventListener("click", createNewBookObject);

// Function to handle the submit button click event
function addBookClick(event) {
  // Hide the add book interface and the overlay div
  addBookInterface.classList.add("invisible");
  overlayDiv.classList.remove("active-overlay");
  // Prevent the form from being submitted
  event.preventDefault();
}

// Function to create a new book object from the form input
function createNewBookObject() {
    let theNewBook;
    // Get the values from the form inputs
    const title = inputs[0].value;
    const author = inputs[1].value;
    const pages = inputs[2].value;
  
    // Check if any of the inputs are empty
    if (title === "" || author === "" || pages === "") {
      // Display an error message to the user
      alert("Must fill out fields correctly!");
      return;
    }
    
// Initialize a new book object based on whether the "Has Read" checkbox is checked
if (inputs[3].checked) {
    theNewBook = new Book(title, author, pages, true);
  } else {
    theNewBook = new Book(title, author, pages, false);
  }
  
  // Add the new book object to the library
  addBookToLibrary(theNewBook);
  }
  
  // Function to add a book object to the library and display it on the page
function addBookToLibrary(newBook) {
    // Add the new book object to the library array
    myLibrary.push(newBook);
  
    // Create new DOM elements for the book card
    const newCard = document.createElement("div");
    const newCardTitle = document.createElement("div");
    const newCardAuthor = document.createElement("div");
    const newCardPages = document.createElement("div");
    const hasReadNewCard = document.createElement("button");
    const removeCard = document.createElement("button");

    // Append the new book card to the container
    bookCardContainer.appendChild(newCard);
    // Append the book details to the book card
    newCard.appendChild(newCardTitle);
    newCard.appendChild(newCardAuthor);
    newCard.appendChild(newCardPages);
    newCard.appendChild(hasReadNewCard);
    newCard.appendChild(removeCard);
  
    // Add classes to the book card and its elements
    newCard.classList.add("book-card");
    newCardTitle.classList.add("title");
    newCardAuthor.classList.add("author");
    newCardPages.classList.add("pages");
    hasReadNewCard.classList.add("has-read");
    removeCard.classList.add("remove-card");

    // Set the text of the book card elements to the values of the book object
    newCardTitle.innerText = newBook.title;
    newCardAuthor.innerText = newBook.author;
    newCardPages.innerText = newBook.pages;
    removeCard.innerText = "Remove";
    if (newBook.hasRead) {
      hasReadNewCard.innerText = "Has Read";
    } else {
      hasReadNewCard.innerText = "Has Not Read";
  }

document.addEventListener("click", function(event) {
    if (event.target.matches(".remove-card")) {
        const removers = document.getElementsByClassName("remove-card");
        const theIndex = [].indexOf.call(removers, event.target);
        document.getElementsByClassName("book-card")[theIndex].remove();
      }
    });
}

document.addEventListener("click", function(event) {
    if (event.target.matches(".has-read")) {
        console.log("click");
        const theHasReads = document.getElementsByClassName("has-read");
        const theIndex = [].indexOf.call(theHasReads, event.target);
        console.log(theIndex);
        if (myLibrary[theIndex].hasRead) {
            theHasReads[theIndex].innerText = "Has Not Read";
            console.log("Was true");
            myLibrary[theIndex].hasRead = false;
        } else {
            theHasReads[theIndex].innerText = "Has Read";
            console.log("Was false");
            myLibrary[theIndex].hasRead = true;
        }
    }
})
