import addBook from "./endpoints/addBook.js";
import deleteBook from "./endpoints/deleteBook.js";
import getBooks from "./endpoints/getBooks.js";
import updateBook from "./endpoints/updateBook.js";

import renderAddBook from "./html/renderAddBook.js";
import renderDeleteBook from "./html/renderDeleteBook.js";

const booksAdmin = {
    addBook,
    getBooks,
    updateBook,
    deleteBook,
    renderAddBook,
    renderDeleteBook
};

export default booksAdmin;