import express from "express";
import adminSesionRouter from "./routes/admin/adminSesionRoutes.js";
import cookieParser from "cookie-parser";
import path from "path";
import __dirname from "./config/path.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Routes
app.use("/admin", adminSesionRouter);

export default app;