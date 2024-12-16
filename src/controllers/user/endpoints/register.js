import prisma from "../../../lib/prisma.js";
import bcrypt from "bcrypt";
import config from "../../../config/config.js";

const registerUser = async (req, res) => {
    let { name } = req.body;
    const { email, password } = req.body;

    name = name.toLowerCase();

    try {
        const userExists = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });
        if (userExists) {    
            return res.status(400).json({ message: "El usuario ya existe" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error al buscar el usuario" });
    }

    let hashedPassword;

    try {
        hashedPassword = await bcrypt.hash(password, parseInt(config.SALT));
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error al hashear la contraseña" });
    }

    try {
        const user = await prisma.user.create({
            data: {
                username: name,
                email: email,
                password: hashedPassword,
            },
        });
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error al crear el usuario" });
    }
}

export default registerUser