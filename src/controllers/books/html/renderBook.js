import getBookForID from "../endpoints/getBookForID.js";
import getReviews from "../endpoints/review/getReviews.js";

const renderBook = async (req, res) => {
    const book = await getBookForID(req, res);
    const user = req.user;
    const reviews = await getReviews(req, res, req.user.id);
    res.render("review/libro", { book: book, message: "", user, reviews });
}

export default renderBook;