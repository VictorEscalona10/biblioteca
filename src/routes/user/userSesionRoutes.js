import { Router } from "express";
import { registerValidationRules } from "../../middlewares/dataFilter.js";
import { validateRegister } from "../../middlewares/dataValidation.js";
import userSesion from "../../controllers/user/index.js";
import authenticateTokenUser from "../../middlewares/verifyTokenUser.js";

const router = Router();

router.get("/register", userSesion.renderRegisterUser);
router.get("/login", userSesion.renderLoginUser);
router.get("/profile", authenticateTokenUser, userSesion.renderPerfil);

router.post("/register", registerValidationRules, validateRegister, userSesion.registerUser);
router.post("/login", userSesion.loginUser);
router.post("/profile", authenticateTokenUser, userSesion.getUserSavedBooks);

export default router