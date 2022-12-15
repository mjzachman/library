
// Things I need
const myLibrary = [];
const content = document.querySelector("#display");
const addBookBtn = document.querySelector("#addBookBtn");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read; // Boolean
  this.info = function info() {
    return `${title} by ${author}, ${pages} pages long. (${read})`;
  };
}

function addNewCard() {
  const card = document.createElement("div");
  card.classList.add("card");
  card.textContent = myLibrary[myLibrary.length-1].info();
  content.appendChild(card);
}

function addBookToLibrary(title, author, pages, read) {
  const userBook = new Book(title, author, pages, read);
  myLibrary.push(userBook);
  addNewCard();
}

function validateForm(event) {
  event.preventDefault();
  const form = document.querySelector('form');
  const userTitle = document.querySelector('#title');
  const userAuthor = document.querySelector('#author');
  const userPages = document.querySelector('#pages');
  const userRead = document.querySelector('input[name="read"]:checked');
  addBookToLibrary(userTitle.value, userAuthor.value, userPages.value, userRead.value);
  form.reset();
}


addBookBtn.addEventListener("click", (event) => {
  validateForm(event);
  console.log('click!');
});
 