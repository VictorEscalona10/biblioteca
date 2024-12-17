import { Router } from "express";
import indexController from "../controllers/indexController.js";

const router = Router();

router.get("/", indexController);

export default router
