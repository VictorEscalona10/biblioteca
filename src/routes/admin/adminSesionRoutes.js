import { Router } from "express";
import adminSesion from "../../controllers/admin/index.js";
import authenticateTokenAdmin from "../../middlewares/verifyTokenAdmin.js";

const router = Router();

router.get("/register", authenticateTokenAdmin, adminSesion.renderRegisterAdmin);
router.get("/login", adminSesion.renderLoginAdmin);

router.post("/register", authenticateTokenAdmin, adminSesion.registerAdmin);
router.post("/login", adminSesion.loginAdminPost);

export default router;
