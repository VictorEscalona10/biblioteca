import { Router } from "express";
import addReview from "../../controllers/books/endpoints/review/addReview.js";
import authenticateTokenUser from "../../middlewares/verifyTokenUser.js";

const router = Router();

router.post("/:id/rate", authenticateTokenUser, addReview);

export default router;