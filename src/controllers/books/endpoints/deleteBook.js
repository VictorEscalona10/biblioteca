import prisma from "../../../lib/prisma.js";

const deleteBook = async (req, res) => {
    const { id } = req.body;

    try {

        const bookExists = await prisma.book.findUnique({
            where: {
                id: id,
            },
        })

        if (!bookExists) {
            return res.status(400).json({ message: "El libro no existe" });
        }

        const deletedBook = await prisma.book.delete({
            where: {
                id: id,
            },
        });
        res.status(200).json(deletedBook);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al eliminar el libro" });
    }
};

export default deleteBook;