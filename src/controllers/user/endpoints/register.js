import prisma from "../../../lib/prisma.js";
import bcrypt from "bcrypt";
import config from "../../../config/config.js";

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const userExists = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });
        if (userExists) {    
            return res.status(400).render("auth/registerUser", { message: "El usuario ya existe" });
        }
    } catch (error) {
        console.error("el usuario ya existe",error);
        return res.status(500).render("auth/registerUser", { message: "Ha ocurrido un error. Por favor, inténtelo de nuevo más tarde." });
    }

    let hashedPassword;

    try {
        hashedPassword = await bcrypt.hash(password, parseInt(config.SALT));
    } catch (error) {
        console.error("la contrasena no pudo ser hasheada",error);
        return res.status(500).render("auth/registerUser", { message: "Ha ocurrido un error. Por favor, inténtelo de nuevo más tarde." });
    }

    try {
        const user = await prisma.user.create({
            data: {
                username: username,
                email: email,
                password: hashedPassword,
            },
        });
        res.status(201).redirect("/user/login");
    } catch (error) {
        console.error("error al registrar el usuario",error);
        return res.status(500).render("auth/registerUser", { message: "Ha ocurrido un error. Por favor, inténtelo de nuevo más tarde." });
    }
}

export default registerUser