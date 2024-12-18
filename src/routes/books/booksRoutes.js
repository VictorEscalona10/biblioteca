import { Router } from "express";
import booksAdmin from "../../controllers/books/index.js";
import authenticateTokenAdmin from "../../middlewares/verifyTokenAdmin.js";

const router = Router();

router.get("/add", authenticateTokenAdmin, booksAdmin.renderAddBook);
router.get("/delete", authenticateTokenAdmin, booksAdmin.renderDeleteBook);

router.post("/add", authenticateTokenAdmin, booksAdmin.addBook);
router.get("/", booksAdmin.getBooks);
router.put("/update", authenticateTokenAdmin, booksAdmin.updateBook);
router.post("/delete", authenticateTokenAdmin, booksAdmin.deleteBook).delete("/delete", authenticateTokenAdmin, booksAdmin.deleteBook);

export default router;