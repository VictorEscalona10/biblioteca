import addBook from "./endpoints/addBook.js";
import deleteBook from "./endpoints/deleteBook.js";
import getBooks from "./endpoints/getBooks.js";
import updateBook from "./endpoints/updateBook.js";
import getBooksAdvanced from "./endpoints/getBooksAdvanced.js";
import getBookForID from "./endpoints/getBookForID.js";
import addBookUser from "./endpoints/addBookUser.js";

import renderAddBook from "./html/renderAddBook.js";
import renderDeleteBook from "./html/renderDeleteBook.js";
import renderBookSearch from "./html/renderBookSearch.js";
import renderBook from "./html/renderBook.js";

const booksAdmin = {
    addBook,
    getBooks,
    updateBook,
    deleteBook,
    getBooksAdvanced,
    getBookForID,
    addBookUser,
    renderAddBook,
    renderDeleteBook,
    renderBookSearch,
    renderBook
};

export default booksAdmin;