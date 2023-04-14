class BookShelf {
  // The constructor method initializes an empty array for the books property
  constructor() {
    this.books = [];
  }

  // The seed method fills the books array with new Book instances created from the book data passed as an argument
  seed(bookData) {
    for (const book of bookData) {
      const newBook = new Book(
        book.author,
        book.language,
        book.subject,
        book.title
      );
      this.books.push(newBook); // Add the new Book instance to the books array
    }
    this.render(); // Call the render method to display the books in the bookContainer
  }

  // The render method displays the books in the books array in the bookContainer element
  render(books = this.books) {
    const bookContainer = document.getElementById("bookContainer");
    bookContainer.innerHTML = ""; // Clear the book container before rendering

    const bookList = document.createElement("ol");
    bookList.classList.add("bookseven");

    // Store the current comments for each book
    const currentComments = {};
    for (const book of books) {
      currentComments[book.title] = book.commentsData;
    }

    for (const book of books) {
      const bookListItem = book.render();

      // Add back the current comments for the book
      if (currentComments[book.title]) {
        for (const comment of currentComments[book.title]) {
          const newComment = document.createElement("div");
          newComment.innerText = `"${comment}" `;
          bookListItem.querySelector(".comments").appendChild(newComment);
        }
      }

      bookList.append(bookListItem);
    }

    bookContainer.append(bookList);
  }

  // The add method adds a new book to the books array and calls the render method to update the book list display
  add(book) {
    this.books.push(book);
    this.render();
  }

  // The countFavoriteBooks method returns the number of books marked as favorites in the books array
  countFavoriteBooks() {
    return this.books.reduce(
      (count, book) => (book.isFavorite ? count + 1 : count),
      0
    );
  }

  // The sortBooks method sorts the books array by title in either ascending or descending order and calls the render method to update the book list display
  sortBooks(sortBy) {
    let sortedBooks;
    if (sortBy === "titleaz") {
      sortedBooks = this.books.sort((a, b) =>
        a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
      );
    } else if (sortBy === "titleza") {
      sortedBooks = this.books.sort((a, b) =>
        a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1
      );
    }
    this.render(sortedBooks);
  }

  // The searchBooks method filters the books array by a search query and calls the render method to update the book list display
  searchBooks(query) {
    const searchResults = this.books.filter(
      (book) =>
        book.title.toString().toLowerCase().includes(query.toLowerCase()) ||
        book.author.toString().toLowerCase().includes(query.toLowerCase()) ||
        book.subject.toString().toLowerCase().includes(query.toLowerCase()) ||
        book.language.toString().toLowerCase().includes(query.toLowerCase())
    );
    this.render(searchResults);
  }
}
