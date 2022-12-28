const elRow = document.querySelector(".row");
const elInput = document.querySelector(".js-input");
const elForm = document.querySelector(".js-form");
// Selects
const authorSelect = document.querySelector(".author-select");
const yearSelect = document.querySelector(".year-select");
const pageSelect = document.querySelector(".page-select");
const languageSelect = document.querySelector(".language-select");
// Selects
const elArrowUp = document.querySelector(".js-arrow");
const elModeBtn = document.querySelector(".mode");

// Arrow up
window.addEventListener("scroll", () => {
  if (window.scrollY >= 400) {
    elArrowUp.classList.remove("d-none");
  } else {
    elArrowUp.classList.add("d-none");
  }
});
// Arrow up

// Dark mode
let theme = false;
elModeBtn.addEventListener("click", () => {
  theme = !theme;

  const bgTheme = theme ? "dark" : "light";
  window.localStorage.setItem("theme", bgTheme);
  changeTheme();
});

function changeTheme() {
  if (window.localStorage.getItem('theme') == "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}
changeTheme();

// Dark mode

function renderBook(array, node) {
  node.innerHTML = "";
  array.forEach((element) => {
    let newDiv = document.createElement("div");
    newDiv.setAttribute(
      "class",
      "border border-1 p-3 mb-4 mt-5 col-12 col-sm-12 col-md-3 rounded newDiv"
    );

    let elBookIm = document.createElement("img");
    elBookIm.setAttribute("src", `./img/${element.imageLink}`);
    elBookIm.setAttribute("class", "img-fluid");

    let elBookName = document.createElement("p");
    elBookName.setAttribute("class", "card-text mt-2");
    elBookName.innerHTML = `<i class="fa-regular fa-address-book mt-2 fs-4"></i> <strong>Author:</strong> ${element.author}`;

    let elBookYear = document.createElement("p");
    elBookYear.setAttribute("class", "card-text mt-2");
    elBookYear.innerHTML = `<i class="fa-solid fa-calendar-day mt-2 fs-4"></i> <strong>Published year:</strong> ${element.year}`;

    let elBookPage = document.createElement("p");
    elBookPage.setAttribute("class", "card-text mt-2");
    elBookPage.innerHTML = `<i class="fa-sharp fa-solid fa-file-lines mt-2 fs-4"></i> <strong>Page :</strong> ${element.pages}`;

    let elBookLanguage = document.createElement("p");
    elBookLanguage.setAttribute("class", "card-text mt-2");
    elBookLanguage.innerHTML = `<i class="fa-sharp fa-solid fa-language mt-2 fs-4"></i> <strong>Book language:</strong> ${element.language}`;

    newDiv.appendChild(elBookIm);
    newDiv.appendChild(elBookName);
    newDiv.appendChild(elBookYear);
    newDiv.appendChild(elBookPage);
    newDiv.appendChild(elBookLanguage);

    node.appendChild(newDiv);
  });
}
renderBook(books, elRow);

//* Search
let newSearch = [];
elForm.addEventListener("input", function (evt) {
  newSearch = [];
  evt.preventDefault();

  let elInputVal = elInput.value;

  books.forEach((element) => {
    if (
      element.author.toLowerCase().includes(elInputVal.toLowerCase()) ||
      element.year.toString().includes(elInputVal.toLowerCase()) ||
      element.pages.toString().includes(elInputVal.toLowerCase()) ||
      element.country.toLowerCase().includes(elInputVal.toLowerCase()) ||
      element.title.toLowerCase().includes(elInputVal.toLowerCase()) ||
      element.id.toLowerCase().includes(elInputVal.toLowerCase()) ||
      element.language.toLowerCase().includes(elInputVal.toLowerCase())
    ) {
      newSearch.push(element);
    }
  });
  renderBook(newSearch, elRow);
});
//* Search
authorSelect.addEventListener("change", function (evt) {
  authorArr = [];

  books.forEach((element) => {
    if (element.author.includes(authorSelect.value)) {
      console.log(element);
    }
  });
});
//* Search

//* Author sort
let authorSet = new Set();
books.forEach((element) => {
  authorSet.add(element.author);
});
authorSet.forEach((element) => {
  let newOpt = document.createElement("option");
  newOpt.setAttribute("value", element);
  newOpt.textContent = element;
  authorSelect.appendChild(newOpt);
});

//* Author change sort
let authorArr = [];
authorSelect.addEventListener("change", () => {
  authorArr = [];
  if (authorSelect.value !== "all") {
    books.forEach((element) => {
      if (element.author.includes(authorSelect.value)) {
        authorArr.push(element);
      }
    });
    renderBook(authorArr, elRow);
  }
});

//* Year sort
let yearSet = new Set();
books.forEach((el) => {
  yearSet.add(el.year);
});

yearSet.forEach((el) => {
  let newOpt = document.createElement("option");
  newOpt.setAttribute("class", el);
  newOpt.textContent = el;
  yearSelect.appendChild(newOpt);
});

//* Year change sort
let yearArr = [];
yearSelect.addEventListener("change", () => {
  yearArr = [];
  if (yearSelect.value !== "all") {
    books.forEach((element) => {
      if (element.year == yearSelect.value) {
        yearArr.push(element);
      }
    });
    renderBook(yearArr, elRow);
  }
});

//* Page sort
let pageSet = new Set();
books.forEach((el) => {
  pageSet.add(el.pages);
});

pageSet.forEach((el) => {
  let newOpt = document.createElement("option");
  newOpt.setAttribute("value", el);
  newOpt.textContent = el;
  pageSelect.appendChild(newOpt);
});

let pageArr = [];
pageSelect.addEventListener("change", () => {
  pageArr = [];
  if (pageSelect.value !== "all") {
    books.forEach((el) => {
      if (el.pages == pageSelect.value) {
        pageArr.push(el);
      }
    });
    renderBook(pageArr, elRow);
  }
});

//* Language sort
let languageSet = new Set();
books.forEach((el) => {
  languageSet.add(el.language);
});

languageSet.forEach((el) => {
  let newOpt = document.createElement("option");
  newOpt.setAttribute("value", el);
  newOpt.textContent = el;
  languageSelect.appendChild(newOpt);
});

let languageArr = [];
languageSelect.addEventListener("change", (evt) => {
  languageArr = [];
  if (languageSelect.value !== "all") {
    books.map((element) => {
      if (element.language.includes(languageSelect.value)) {
        languageArr.push(element);
      }
    });
    renderBook(languageArr, elRow);
  }
});
