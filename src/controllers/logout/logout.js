const logout = async (req, res) => {
    try {
        res.clearCookie("userToken");
        res.status(200).redirect("/");
    } catch (error) {
        return res.status(500).json({ message: `Ha ocurrido un error. Por favor, inténtelo de nuevo más tarde.` });
    }
}

export default logout