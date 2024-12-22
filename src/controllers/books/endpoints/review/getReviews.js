import prisma from "../../../../lib/prisma.js";

const getReviews = async (req, res, userId) => {
    const bookId = parseInt(req.params.id);

    try {
        const reviews = await prisma.review.findMany({
            where: { bookId: bookId },
            include: { user: true }
        });

        if (!reviews) {
            return res.status(404).render('review/libro', { message: 'No se encontraron reseñas', reviews: null, user: userId });
        }
        console.log(reviews)
        return reviews;
    } catch (error) {
        console.error('Error al obtener las reseñas:', error);
        res.status(500).render('review/libro', { message: 'Error al obtener las reseñas', reviews: null, user: userId });
    }
}

export default getReviews;