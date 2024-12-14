import prisma from "../../../lib/prisma.js";
import bcrypt from "bcrypt";
import config from "../../../config/config.js";

const registerAdmin = async (req, res) => {
    const { adminName, email, password } = req.body;

    try {
        const adminExists = await prisma.admin.findUnique({
            where: {
                email: email,
            },
        });
        if (adminExists) {
            return res.status(400).json({ message: "El administrador ya existe" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error al buscar el administrador" });
    }

    let hashedPassword;

    try {
        hashedPassword = await bcrypt.hash(password, parseInt(config.SALT));
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error al hashear la contraseña" });
    }

    try {    
        const admin = await prisma.admin.create({
            data: {
                adminName: adminName,
                email: email,
                password: hashedPassword,
            },
        });
        res.status(201).json(admin);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al crear el administrador" });
    }
};

export default registerAdmin;
