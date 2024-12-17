import prisma from "../../../lib/prisma.js";

const getBooks = async (req, res) => {
    try {
        const books = await prisma.book.findMany();
        res.status(200).json(books);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener libros" });
    }
}

export default getBooks