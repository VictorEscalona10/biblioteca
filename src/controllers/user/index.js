import renderLoginUser from "./html/renderLogin.js";
import renderRegisterUser from "./html/renderRegister.js";
import renderPerfil from "./html/renderPerfil.js";

import loginUser from "./endpoints/login.js";
import registerUser from "./endpoints/register.js";
import getUserSavedBooks from "./endpoints/getUserSavedBooks.js";

let userSesion = {
    renderLoginUser,
    renderRegisterUser,
    loginUser,
    registerUser,
    renderPerfil,
    getUserSavedBooks
};

export default userSesion;