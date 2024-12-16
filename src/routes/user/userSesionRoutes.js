import { Router } from "express";
import userSesion from "../../controllers/user/index.js";

const router = Router();

router.get("/register", userSesion.renderRegisterUser);
router.get("/login", userSesion.renderLoginUser);

router.post("/register", userSesion.registerUser);
router.post("/login", userSesion.loginUser);

export default router