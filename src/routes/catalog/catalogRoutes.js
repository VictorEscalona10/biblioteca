import { Router } from "express";
import catalogSesion from "../../controllers/catalog/index.js";
import authenticateTokenUser from "../../middlewares/verifyTokenUser.js";

const router = Router();

router.get("/", authenticateTokenUser, catalogSesion.renderCatalog);

export default router