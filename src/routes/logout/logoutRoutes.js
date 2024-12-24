import { Router } from "express";
import logout from "../../controllers/logout/logout.js";

const router = Router();

router.get("/", logout);

export default router;