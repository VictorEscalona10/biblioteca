import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import __dirname from "./config/path.js";

import indexRouter from "./routes/indexRoutes.js";
import adminSesionRouter from "./routes/admin/adminSesionRoutes.js";
import userSesionRouter from "./routes/user/userSesionRoutes.js";
import catalogRouter from "./routes/catalog/catalogRoutes.js";
import booksRouter from "./routes/books/booksRoutes.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Routes
app.use(indexRouter);
app.use("/admin", adminSesionRouter);
app.use("/user", userSesionRouter);
app.use("/catalog", catalogRouter);
app.use("/books", booksRouter);


// Middleware para manejar el error 404 si no se encuentra la ruta
app.use((req, res, next) => {
    res.status(404).render("index", { message: "Ruta no encontrada" });
})

export default app;