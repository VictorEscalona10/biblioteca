import prisma from "../../../lib/prisma.js";

const addBook = async (req, res) => {
    const adminId = req.admin.id;
    const { title, author, genre, year, link, description } = req.body;
    const publishDate = new Date(year);
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
                publishDate: publishDate,
                description: description,
                link: link,
                admin: { connect: { id: adminId } }
            },
        });
        res.status(201).render("booksAdmin/addBook", { message: "Libro agregado correctamente" });
    } catch (error) {
        console.error(error);
        res.status(500).render("booksAdmin/addBook", { message: `Error al agregar el libro ${error}` });
    }
};

export default addBook;
