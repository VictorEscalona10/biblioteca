import express from "express";
import adminSesionRouter from "./routes/admin/adminSesionRoutes.js";
import userSesionRouter from "./routes/user/userSesionRoutes.js";
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
app.use("/user", userSesionRouter);

export default app;