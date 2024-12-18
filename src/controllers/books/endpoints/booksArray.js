import prisma from "../../../lib/prisma.js";

const booksArray = async () => {
    const books = await prisma.book.findMany();
    return books;
};

export default booksArray;
