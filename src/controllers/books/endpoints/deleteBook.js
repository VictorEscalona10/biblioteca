import prisma from "../../../lib/prisma.js";
import booksArray from "./booksArray.js";

const deleteBook = async (req, res) => {
    const { id } = req.body;

    try {

        const bookExists = await prisma.book.findUnique({
            where: {
                id: parseInt(id),
            },
        })

        if (!bookExists) {
            let books = await booksArray();
            return res.status(400).render("booksAdmin/deleteBook", { message: "El libro no existe", books: books });
        }

        const deletedBook = await prisma.book.delete({
            where: {
                id: parseInt(id),
            },
        });

        let books = await booksArray();

        res.status(200).render("booksAdmin/deleteBook", { message: "Libro eliminado correctamente", books: books });
    } catch (error) {
        console.error(error);
        let books = await booksArray();
        res.status(500).render("booksAdmin/deleteBook", { message: "Error al eliminar el libro", books: books });
    }
};

export default deleteBook;