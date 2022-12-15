
const myLibrary = [{
  title: 'penguins',
  author:'mr polar bear',
  pages: '980',
  read: 'yes'

},
{
  title: 'donuts',
  author:'the police man',
  pages: '2',
  read: 'no'
}];



function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read; // Boolean
  this.info = function info() {
    return `${title} by ${author}, ${pages} pages long. (${read})`;
  };
}

function addNewCard(book) {
  const content = document.querySelector('#display');
  const card = document.createElement('div');
  const cardTitle = document.createElement('p');
  const cardAuthor = document.createElement('p');
  const cardPages = document.createElement('p');
  
  cardTitle.textContent = book.title;
  cardAuthor.textContent = book.author;
  cardPages.textContent = book.pages;
  
  card.classList.add('card');
  cardTitle.classList.add('title');
  cardAuthor.classList.add('author');
  cardPages.classList.add('pages');

  card.appendChild(cardTitle);
  card.appendChild(cardAuthor);
  card.appendChild(cardPages);
  content.appendChild(card);
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
  const userRead = document.querySelector('input[name="read"]:checked');
  addBookToLibrary(userTitle.value, userAuthor.value, userPages.value, userRead.value);
  form.reset();
}

const addBookBtn = document.querySelector("#addBookBtn");
addBookBtn.addEventListener("click", (event) => {
  validateForm(event);
});
 

addNewCard(myLibrary[0]);
addNewCard(myLibrary[1]);