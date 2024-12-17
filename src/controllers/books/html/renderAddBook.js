const renderAddBook = (req, res) => {
    res.render("booksAdmin/addBook", { message: "" });
};

export default renderAddBook;