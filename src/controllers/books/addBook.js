import prisma from "../../../lib/prisma.js";

const addBook = async (req, res) => {
    const adminId = req.admin.id;
    const { title, author, genre, publishDate, description } = req.body;

    try {
        const book = await prisma.book.create({
            data: {
                title: title,
                author: author,
                genre: genre,
                publishDate: publishDate,
                description: description,
                admin: { connect: { id: adminId } }
            },
        });
        res.status(201).json(book);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al crear el libro" });
    }
};

export default addBook;
