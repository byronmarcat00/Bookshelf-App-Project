// Creates a new BookShelf object
const bookShelf = new BookShelf();

// Seeds the BookShelf with initial data from the `bookData` object.
bookShelf.seed(bookData);

// Listens for the click event on the "userInputButton" element and adds a new book to the BookShelf.
document.getElementById("userInputButton").addEventListener("click", () => {
  // Get the input values from the user
  const bookTitle = document.getElementById("bookTitle").value;
  const bookAuthor = document.getElementById("bookAuthor").value;
  const bookSubjects = document.getElementById("bookSubjects").value;
  const bookLanguage = document.getElementById("bookLanguage").value;

  // Creates a new Book object using the input values
  const addBook = new Book(bookTitle, bookAuthor, bookSubjects, bookLanguage);

  // Adds the new book to the BookShelf
  bookShelf.add(addBook);
});

// Gets the elements to update the favorite book count
const favCount = document.querySelector(".favCount");
const updateBtn = document.querySelector(".favUpdateBtn");

// Listens for the click event on the "updateBtn" element and updates the favorite book count
updateBtn.addEventListener("click", () => {
  favCount.textContent = bookShelf.countFavoriteBooks();
});

// Gets the search input element and the search button element
const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".searchBtn");

// Listens for the click event on the "searchBtn" element and searches for books
searchBtn.addEventListener("click", () => {
  const query = searchInput.value.toLowerCase();
  bookShelf.searchBooks(query);
});

// Gets the element for sorting books
const sortBy = document.querySelector(".sortBy");

// Listens for the change event on the "sortBy" element and sorts the books
sortBy.addEventListener("change", () => {
  const query = sortBy.value;
  bookShelf.sortBooks(query);
});
