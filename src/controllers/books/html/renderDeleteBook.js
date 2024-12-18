import booksArray from "../endpoints/booksArray.js";

const renderDeleteBook = async (req, res) => {
    const books = await booksArray()
    res.render("booksAdmin/deleteBook", { books: books, message: "" });
};

export default renderDeleteBook;