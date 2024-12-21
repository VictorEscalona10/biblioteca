import getBooksAdvanced from "../endpoints/getBooksAdvanced.js";

const renderBookSearch = async (req, res) => {
    try {
        const books = await getBooksAdvanced(req, res);
        res.status(200).render("bookSearch/bookSearch", { books });
    } catch (error) {
        console.error("Error al renderizar la búsqueda de libros:", error);
        res.status(500)
    }
}

export default renderBookSearch;