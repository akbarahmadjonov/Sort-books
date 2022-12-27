const elRow = document.querySelector(".row");
const elInput = document.querySelector(".js-input");
const elSortName = document.querySelector(".js-sort-name");
const elSortYear = document.querySelector(".js-sort-year");
const elSortPage = document.querySelector(".js-sort-page");
const elSortLanguage = document.querySelector(".js-sort-language");
const elForm = document.querySelector(".js-form");

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

let newAuthorSort = [];
elSortName.addEventListener("click", function (evt) {
  evt.preventDefault();

  books.forEach((element) => {
    element.sort((a, b) => {
      if (b.title > a.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
    newAuthorSort.push(sorted);
    renderBook(newAuthorSort, elRow);
  });
});
