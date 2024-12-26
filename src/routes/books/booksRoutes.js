import { Router } from "express";
import booksAdmin from "../../controllers/books/index.js";
import authenticateTokenAdmin from "../../middlewares/verifyTokenAdmin.js";
import authenticateTokenUser from "../../middlewares/verifyTokenUser.js";
import { bookValidationRules } from "../../middlewares/dataFilter.js";
import {validateBooks} from "../../middlewares/dataValidation.js";

const router = Router();

router.get("/add", authenticateTokenAdmin, booksAdmin.renderAddBook);
router.get("/delete", authenticateTokenAdmin, booksAdmin.renderDeleteBook);
router.get("/search", authenticateTokenUser, booksAdmin.renderBookSearch);
router.get("/:id", authenticateTokenUser, booksAdmin.renderBook);

router.post("/add", authenticateTokenAdmin, bookValidationRules, validateBooks, booksAdmin.addBook);
router.get("/", booksAdmin.getBooks);
router.post("/advanced", booksAdmin.getBooksAdvanced);
router.put("/update", authenticateTokenAdmin, booksAdmin.updateBook);
router.post("/delete", authenticateTokenAdmin, booksAdmin.deleteBook).delete("/delete", authenticateTokenAdmin, booksAdmin.deleteBook);
router.post("/addUser/:bookId", authenticateTokenUser, booksAdmin.addBookUser);

export default router;