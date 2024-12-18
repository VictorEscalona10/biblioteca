import prisma from "../../../lib/prisma.js";

const addBook = async (req, res) => {
    const adminId = req.admin.id;
    const { title, author, genre, publishDate, description } = req.body;

    try {
        const existingBook = await prisma.book.findFirst({
            where: {
                title: title,
            },

        })

        if (existingBook) {
            return res.status(400).render("booksAdmin/addBook", { message: "El libro ya existe" });
        }

        const book = await prisma.book.create({
            data: {
                title: title,
                author: author,
                genre: genre,
                publishDate: publishDate ? new Date(publishDate) : null,
                description: description,
                admin: { connect: { id: adminId } }
            },
        });
        res.status(201).render("booksAdmin/addBook", { message: "Libro agregado correctamente" });
    } catch (error) {
        console.error(error);
        res.status(500).render("booksAdmin/addBook", { message: "Error al agregar el libro" });
    }
};

export default addBook;
