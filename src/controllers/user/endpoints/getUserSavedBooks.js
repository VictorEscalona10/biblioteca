import prisma from "../../../lib/prisma.js";

const getUserSavedBooks = async (req, res) => {
    let userId = req.user.id;
    const user = req.user

    try {
        const userWithSavedBooks = await prisma.user.findUnique({
            where: { id: parseInt(userId) },
            include: {
                savedBooks: {
                    include: {
                        book: true, // Incluye la información del libro
                    },
                    take: 3 // Limita el número de libros guardados a 3
                },
            },
        });

        if (!userWithSavedBooks) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        const books = userWithSavedBooks.savedBooks.map(savedBook => savedBook.book);

        res.status(200).render("perfil/perfil", { books: books, user: user });
    } catch (error) {
        console.error("Error al obtener los libros guardados del usuario:", error);
        res.status(500).json({ message: "Error al obtener los libros guardados del usuario" });
    }
};

export default getUserSavedBooks;
