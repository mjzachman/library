const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(){
     const userTitle = document.getElementById('#title');
     const userAuthor = document.getElementById('#author');
    // const userTitle = "penguins";
    // const userAuthor = "mr polar bear";
    const userBook = new Book(userTitle, userAuthor);
    myLibrary.push(userBook);
    
};

const addBookButton = document.getElementById('#submit');

addBookButton.addEventListener("click", addBookToLibrary());

