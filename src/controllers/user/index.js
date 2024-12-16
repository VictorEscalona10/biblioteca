import renderLoginUser from "./html/renderLogin.js";
import renderRegisterUser from "./html/renderRegister.js";

import loginUser from "./endpoints/login.js";
import registerUser from "./endpoints/register.js";

let userSesion = {
    renderLoginUser,
    renderRegisterUser,
    loginUser,
    registerUser,
};

export default userSesion;