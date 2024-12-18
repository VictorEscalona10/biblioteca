import prisma from "../../../lib/prisma.js";

const getTopRatedBooks = async () => {
    try {
        const books = await prisma.book.findMany({
            include: {
                reviews: {
                    select: {
                        rating: true,
                    },
                },
            },
        });

        const bookRatings = books.map(book => {
            const totalRating = book.reviews.reduce((acc, review) => acc + review.rating, 0);
            const averageRating = book.reviews.length ? totalRating / book.reviews.length : 0;
            return {
                ...book,
                averageRating,
            };
        });

        const topRatedBooks = bookRatings.sort((a, b) => b.averageRating - a.averageRating).slice(0, 4);

        return topRatedBooks;
    } catch (error) {
        console.error("Error al obtener los libros con mejores valoraciones:", error);
        throw new Error("No se pudieron obtener los libros con mejores valoraciones");
    }
};

export default getTopRatedBooks;
