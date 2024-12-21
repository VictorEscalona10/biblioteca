import { Router } from "express";
import booksAdmin from "../../controllers/books/index.js";
import authenticateTokenAdmin from "../../middlewares/verifyTokenAdmin.js";
import authenticateTokenUser from "../../middlewares/verifyTokenUser.js";

const router = Router();

router.get("/add", authenticateTokenAdmin, booksAdmin.renderAddBook);
router.get("/delete", authenticateTokenAdmin, booksAdmin.renderDeleteBook);
router.get("/search", authenticateTokenUser, booksAdmin.renderBookSearch);
router.get("/:id", authenticateTokenUser, booksAdmin.renderBook);

router.post("/add", authenticateTokenAdmin, booksAdmin.addBook);
router.get("/", booksAdmin.getBooks);
router.post("/advanced", booksAdmin.getBooksAdvanced);
router.put("/update", authenticateTokenAdmin, booksAdmin.updateBook);
router.post("/delete", authenticateTokenAdmin, booksAdmin.deleteBook).delete("/delete", authenticateTokenAdmin, booksAdmin.deleteBook);

export default router;