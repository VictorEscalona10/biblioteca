import prisma from "../../../lib/prisma.js";

const deleteBook = async (req, res) => {
    const { id } = req.body;

    try {

        const bookExists = await prisma.book.findUnique({
            where: {
                id: parseInt(id),
            },
        })

        if (!bookExists) {
            return res.status(400).render("booksAdmin/deleteBook", { message: "El libro no existe", books: await prisma.book.findMany() });
        }

        const deletedBook = await prisma.book.delete({
            where: {
                id: parseInt(id),
            },
        });
        res.status(200).render("booksAdmin/deleteBook", { message: "Libro eliminado correctamente", books: await prisma.book.findMany() });
    } catch (error) {
        console.error(error);
        res.status(500).render("booksAdmin/deleteBook", { message: "Error al eliminar el libro", books: await prisma.book.findMany() });
    }
};

export default deleteBook;