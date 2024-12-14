import registerAdmin from "./endpoints/register.js";
import renderRegisterAdmin from "./html/renderRegister.js";

import loginAdminPost from "./endpoints/login.js";
import renderLoginAdmin from "./html/renderLogin.js";

const adminSesion = { 
    renderRegisterAdmin,
    registerAdmin, 
    renderLoginAdmin, 
    loginAdminPost 
};

export default adminSesion;