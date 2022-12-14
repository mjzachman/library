const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read; // Boolean
  this.info = function info() {
    return `${title} by ${author}, ${pages} pages long. (${read})`;
  };
}

const content = document.querySelector("#display");

function addNewCard() {
  const card = document.createElement("div");
  card.classList.add("card");
  card.textContent = myLibrary[0].info();
  content.appendChild(card);
}

function addBookToLibrary() {
  const userTitle = prompt("Enter Book Title:");
  const userAuthor = prompt("Enter Book Author:");
  const userPages = prompt("Enter Book Pages");
  const userRead = prompt("Have you read it?");
  const userBook = new Book(userTitle, userAuthor, userPages, userRead);
  myLibrary.unshift(userBook);
  addNewCard();
}
const addBookBtn = document.querySelector("#addBookBtn");

addBookBtn.addEventListener("click", () => {
  addBookToLibrary();
});
