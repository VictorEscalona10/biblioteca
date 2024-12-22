import getTopRatedBooks from "../endpoints/getTopRatedBooks.js";

const renderCatalog = async (req, res) => {
    const topRatedBooks = await getTopRatedBooks();
    const user = req.user;
    res.render("catalog/catalogo", { user: user, ratedBooks: topRatedBooks }); 

};

export default renderCatalog