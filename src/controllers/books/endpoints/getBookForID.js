import prisma from "../../../lib/prisma.js";// Asegúrate de importar tu cliente de Prisma

const getBookForID = async (req, res) => {
    const bookId = parseInt(req.params.id);
    const user = req.user;

    try {
        const book = await prisma.book.findUnique({
            where: { id: bookId }
        });

        if (!book) {
            return res.status(404).render('review/libro', { message: 'Libro no encontrado', book: null, user }); 
        }
        return book;
    } catch (error) {
        console.error('Error al obtener la información del libro:', error);
        res.status(500).render('catalog/libro', { message: 'Error al obtener la información del libro', book: null, user });
    }
};

export default getBookForID;