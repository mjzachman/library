const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; // Boolean
    this.info = function info() {
      return `${title} by ${author}, ${pages} pages long. (${read})`;
    };
    this.toggle = function toggle() {
      this.read = !this.read;
    };
  }
}

function addBookToLibrary(title, author, pages, read) {
  const userBook = new Book(title, author, pages, read);
  myLibrary.push(userBook);
}

function removeBookFromLibrary(index) {
  myLibrary.splice(index, 1);
}

function addNewCard(book, index) {
  const display = document.querySelector("#display");
  const card = document.createElement("div");
  const cardTitle = document.createElement("p");
  const cardAuthor = document.createElement("p");
  const cardPages = document.createElement("p");
  const buttons = document.createElement("div");
  const removeBtn = document.createElement("button");
  const statusBtn = document.createElement("button");

  cardTitle.textContent = book.title;
  cardAuthor.textContent = book.author;
  cardPages.textContent = `${book.pages} pp.`;
  removeBtn.textContent = "X";

  card.classList.add("card");
  cardTitle.classList.add("title");
  cardAuthor.classList.add("author");
  cardPages.classList.add("pages");
  buttons.classList.add("buttons");
  removeBtn.classList.add("remove");
  statusBtn.classList.add("status");

  removeBtn.setAttribute("data-index", index);
  statusBtn.setAttribute("data-index", index);

  if (book.read) {
    statusBtn.textContent = "I read this!";
    statusBtn.classList.add("read");
  } else {
    statusBtn.textContent = "Haven't read yet";
    statusBtn.classList.add("unread");
  }

  buttons.appendChild(removeBtn);
  buttons.appendChild(statusBtn);
  card.appendChild(cardTitle);
  card.appendChild(cardAuthor);
  card.appendChild(cardPages);
  card.appendChild(buttons);
  display.appendChild(card);
}

function displayLibrary() {
  const display = document.querySelector("#display");
  while (display.firstChild) {
    display.removeChild(display.firstChild);
  }
  for (let i = 0; i < myLibrary.length; i += 1) {
    addNewCard(myLibrary[i], i);
  }

  // add event listeners here
  const removeBtns = document.querySelectorAll(".remove");
  removeBtns.forEach((button) => {
    button.addEventListener("click", () => {
      removeBookFromLibrary(button.getAttribute("data-index"));
      displayLibrary();
    });
  });

  const statusBtns = document.querySelectorAll(".status");
  statusBtns.forEach((button) => {
    button.addEventListener("click", () => {
      myLibrary[button.getAttribute("data-index")].toggle();
      displayLibrary();
    });
  });
}

function validateForm(event) {
  event.preventDefault();

  // code to check if all inputs are filled out, display error messages

  const form = document.querySelector("form");
  const userTitle = document.querySelector("#title").value;
  const userAuthor = document.querySelector("#author").value;
  const userPages = document.querySelector("#pages").value;
  let userRead = document.querySelector('input[name="read"]:checked').value;
  if (userRead === "yes") {
    userRead = true;
  } else {
    userRead = false;
  }

  addBookToLibrary(userTitle, userAuthor, userPages, userRead);
  displayLibrary();
  form.reset();
}

const addBookBtn = document.querySelector("#addBookBtn");
addBookBtn.addEventListener("click", (event) => {
  validateForm(event);
});
