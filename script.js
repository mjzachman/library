
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read; // Boolean
  this.info = function info() {
    return `${title} by ${author}, ${pages} pages long. (${read})`;
  };
  this.toggle = function toggle() {
    this.read = !this.read;
  }
}

function addNewCard(book) {
  const display = document.querySelector('#display');
  const card = document.createElement('div');
  const cardTitle = document.createElement('p');
  const cardAuthor = document.createElement('p');
  const cardPages = document.createElement('p');
  const buttons = document.createElement('div');
  const removeBtn = document.createElement('button');
  const readBtn = document.createElement('button');
  
  cardTitle.textContent = book.title;
  cardAuthor.textContent = book.author;
  cardPages.textContent = `${book.pages} pp.`;
  removeBtn.textContent = 'X';
  
  card.classList.add('card');
  cardTitle.classList.add('title');
  cardAuthor.classList.add('author');
  cardPages.classList.add('pages');
  buttons.classList.add('buttons');
  removeBtn.classList.add('remove');
  readBtn.classList.add('status');

  if(book.read){
    readBtn.textContent = "I read this!";
    readBtn.classList.add('read');
  }else{
    readBtn.textContent = "Haven't read yet";
    readBtn.classList.add('unread');
  }

  card.appendChild(cardTitle);
  card.appendChild(cardAuthor);
  card.appendChild(cardPages);
  buttons.appendChild(removeBtn);
  buttons.appendChild(readBtn);
  card.appendChild(buttons);
  display.appendChild(card);
}

function addBookToLibrary(title, author, pages, read) {
  const userBook = new Book(title, author, pages, read);
  myLibrary.push(userBook);
  addNewCard(userBook);
}

function validateForm(event) {
  event.preventDefault();
  const form = document.querySelector('form');
  const userTitle = document.querySelector('#title');
  const userAuthor = document.querySelector('#author');
  const userPages = document.querySelector('#pages');
  let userRead = document.querySelector('input[name="read"]:checked');
  if(userRead.value === "yes"){
    userRead = true;
  }else{
    userRead = false;
  }

  addBookToLibrary(userTitle.value, userAuthor.value, userPages.value, userRead);
  form.reset();
}

const addBookBtn = document.querySelector("#addBookBtn");
addBookBtn.addEventListener("click", (event) => {
  validateForm(event);
});

addBookToLibrary('penguins', 'mr polar bear', '980', true);
addBookToLibrary('donuts', 'the police man', '2', false);