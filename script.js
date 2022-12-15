
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

  removeBtn.addEventListener('click', () => {
    console.log('remove');
  })

  readBtn.addEventListener('click', () => {
    console.log('status');
  });

  buttons.appendChild(removeBtn);
  buttons.appendChild(readBtn);
  card.appendChild(cardTitle);
  card.appendChild(cardAuthor);
  card.appendChild(cardPages);
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

  // code to check if all inputs are filled out, display error messages

  const form = document.querySelector('form');
  const userTitle = document.querySelector('#title').value;
  const userAuthor = document.querySelector('#author').value;
  const userPages = document.querySelector('#pages').value;
  let userRead = document.querySelector('input[name="read"]:checked').value;
  if(userRead === "yes"){
    userRead = true;
  }else{
    userRead = false;
  }

  addBookToLibrary(userTitle, userAuthor, userPages, userRead);
  form.reset();
}

const addBookBtn = document.querySelector("#addBookBtn");
addBookBtn.addEventListener("click", (event) => {
  validateForm(event);
});

addBookToLibrary('penguins', 'mr polar bear', '980', true);
addBookToLibrary('donuts', 'the police man', '2', false);