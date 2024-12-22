import prisma from "../../../../lib/prisma.js";
import getReviews from "./getReviews.js";
import getBookForID from "../getBookForID.js";

const addReview = async (req, res) => {
    const bookId = parseInt(req.params.id);
    const userId = req.user.id;
    const { rating, comment } = req.body;
    const book = await getBookForID(req, res);
    const reviewExisting = await getReviews(req, res, userId);

    try {

        
        const newReview = await prisma.review.create({
            data: {
                rating: parseInt(rating),
                comment: comment,
                book: { connect: { id: bookId } },
                user: { connect: { id: userId } }
            }
        });


        const newExistingReviews = await getReviews(req, res, userId);
        res.status(200).render('review/libro', { message: 'Reseña agregada correctamente', reviews: reviewExisting, user: userId, book: book });
    } catch (error) {
        console.error('Error al agregar la reseña:', error);
        res.status(500).render('review/libro', { message: 'Error al agregar la reseña', reviews: reviewExisting, user: userId, book: book });
    }
}

export default addReview;