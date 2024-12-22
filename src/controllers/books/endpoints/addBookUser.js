import prisma from "../../../lib/prisma.js";

const addBookUser = async (req, res) => {
    const userId = req.user.id
    const { bookId } = req.params;

    try {
        
        const bookUser = await prisma.savedBook.create({
            data: {
                bookId: parseInt(bookId),
                userId: parseInt(userId),
            },
        });
        res.status(200).render("review/agg", { message: "Libro añadido correctamente",  });
    } catch (error) {
        res.status(500).render("review/agg", { message: "Error al añadir el libro" });
    }
    
}
export default addBookUser;