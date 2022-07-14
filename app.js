const titles = document.getElementsByClassName("title");
Array.from(titles).forEach((element) => {
  element.addEventListener("click", (e) => console.log(e.type));
});
const list = document.querySelector("ul");
list.addEventListener("click", (e) => {
  if (e.target.className === "delete") {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

const addBooks = document.forms["add-book"];
addBooks.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = addBooks.querySelector('input[type="text"]').value;
  const li = document.createElement("li");
  const bookName = document.createElement("span");
  const deleteBtn = document.createElement("span");

  bookName.textContent = value;
  deleteBtn.textContent = "delete";

  bookName.classList.add("name");
  deleteBtn.classList.add("delete");

  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});

const hide = document.querySelector("#hide");
hide.addEventListener("change", (e) => {
  if (hide.checked) {
    list.style.display = "none";
  } else {
    hide.removeAttribute("checked");
    list.style.display = "initial";
  }
});

const searchBar = document.forms[0].querySelector('input[type="text"]');
searchBar.addEventListener("keyup", (e) => {
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName("li");
  Array.from(books).forEach((book) => {
    const title = book.firstElementChild.textContent;
    if (title.toLowerCase().indexOf(term) !== -1) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
});
