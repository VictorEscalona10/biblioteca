import prisma from "../../../lib/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../../config/config.js";

const loginAdminPost = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await prisma.admin.findUnique({
      where: {
        email: email,
      },
    });

    if (!admin) {
      return res.status(400).json({ message: "El administrador no existe" });
    }

    const passwordMatch = await bcrypt.compare(password, admin.password);

    if (!passwordMatch) {
      return res.status(400).json({ message: "La contraseña es incorrecta" });
    }

    const adminToken = jwt.sign(
      { id: admin.id, email: admin.email },
      config.JWT_SECRET_ADMIN,
      { expiresIn: "24h" }  
    );

    res.cookie("adminToken", adminToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24,
    });

    return res.status(200).json({ message: "Inicio de sesión exitoso" });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

export default loginAdminPost;
