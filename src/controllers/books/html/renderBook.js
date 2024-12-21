import getBookForID from "../endpoints/getBookForID.js";

const renderBook = async (req, res) => {
    const book = await getBookForID(req, res);
    console.log(book);
    const user = req.user;
    res.render("review/libro", { book: book, message: "", user, });
}

export default renderBook;