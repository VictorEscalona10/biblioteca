import { Router } from "express";
import renderCatalog from "../../controllers/catalog/html/renderCatalog.js";
import authenticateTokenUser from "../../middlewares/verifyTokenUser.js";

const router = Router();

router.get("/", authenticateTokenUser,renderCatalog);

export default router