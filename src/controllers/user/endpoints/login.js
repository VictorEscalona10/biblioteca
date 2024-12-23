import prisma from "../../../lib/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../../config/config.js";

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        })

        if (!user) {
            return res.status(400).render("auth/loginUser", { message: "El usuario no existe" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(400).render("auth/loginUser", { message: "La contraseña es incorrecta" });
        }

        const userToken = jwt.sign(
            { id: user.id, email: user.email, username: user.username },
            config.JWT_SECRET,
            { expiresIn: "24h" }
        )

        res.cookie("userToken", userToken, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 1000,
        });

        res.status(200).redirect("/catalog");
    } catch (error) {
        return res.status(500).render("auth/loginUser", { message: `Ha ocurrido un error. Por favor, inténtelo de nuevo más tarde. ${error}` });
    }
}

export default loginUser