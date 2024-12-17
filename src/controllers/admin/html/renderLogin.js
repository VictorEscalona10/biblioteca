const renderLoginAdmin = (req, res) => {
    res.render("auth/loginAdmin", { message: "Login" }); 
};

export default renderLoginAdmin;