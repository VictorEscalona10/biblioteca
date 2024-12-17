import prisma from "../../../lib/prisma.js";

const updateBook = async (req, res) => {
    const { id } = req.body;
    const { title, author, genre, publishDate, description } = req.body;

    try {
        const bookExists = await prisma.book.findUnique({
            where: {
                id: id,
            },
        })
        if (!bookExists) {
            return res.status(400).json({ message: "El libro no existe" });
        }

        const updatedBook = await prisma.book.update({
            where: {
                id: id,
            },
            data: {
                title: title,
                author: author,
                genre: genre,
                publishDate: publishDate ? new Date(publishDate) : null,
                description: description,
            },
        });
        res.status(200).json(updatedBook);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al actualizar el libro" });
    }
};

export default updateBook;