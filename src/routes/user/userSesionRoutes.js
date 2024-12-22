import { Router } from "express";
import userSesion from "../../controllers/user/index.js";
import authenticateTokenUser from "../../middlewares/verifyTokenUser.js";

const router = Router();

router.get("/register", userSesion.renderRegisterUser);
router.get("/login", userSesion.renderLoginUser);
router.get("/profile", authenticateTokenUser, userSesion.renderPerfil);

router.post("/register", userSesion.registerUser);
router.post("/login", userSesion.loginUser);
router.post("/profile", authenticateTokenUser, userSesion.getUserSavedBooks);

export default router