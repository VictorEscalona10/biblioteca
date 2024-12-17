import { Router } from "express";
import booksAdmin from "../../controllers/books/index.js";
import authenticateTokenAdmin from "../../middlewares/verifyTokenAdmin.js";

const router = Router();

router.get("/add", authenticateTokenAdmin, booksAdmin.renderAddBook);

router.post("/add", authenticateTokenAdmin, booksAdmin.addBook);
router.get("/", authenticateTokenAdmin, booksAdmin.getBooks);
router.put("/update", authenticateTokenAdmin, booksAdmin.updateBook);
router.delete("/delete", authenticateTokenAdmin, booksAdmin.deleteBook);

export default router;