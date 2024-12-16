const renderLoginUser = (req, res) => {
    res.render("auth/loginUser", { title: "Login" }); 
};

export default renderLoginUser