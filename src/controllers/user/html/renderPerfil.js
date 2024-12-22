import getUserSavedBooks from "../endpoints/getUserSavedBooks.js";

const renderPerfil = async (req, res) => {
    try {
        const user = req.user;
        const books = await getUserSavedBooks(req, res);
        res.render("perfil/perfil", { books, user: user });
    } catch (error) {
        console.error("Error al renderizar el perfil:", error);
        res.status(500).render("index", { message: "Error al renderizar el perfil" });
    }
};

export default renderPerfil;