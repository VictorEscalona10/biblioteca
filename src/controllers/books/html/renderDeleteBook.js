import prisma from "../../../lib/prisma.js";

const renderDeleteBook = async (req, res) => {
    const books = await prisma.book.findMany();
    res.render("booksAdmin/deleteBook", { books: books, message: "" });
};

export default renderDeleteBook;