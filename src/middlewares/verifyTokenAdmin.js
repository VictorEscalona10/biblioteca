import jwt from "jsonwebtoken";
import config from "../config/config.js";

const authenticateTokenAdmin = (req, res, next) => {
  const token = req.cookies.adminToken;

  if (!token) {
    return res.status(401).json({ message: "No se proporcionó un token" });
  }

  try {
    const verified = jwt.verify(token, config.JWT_SECRET_ADMIN);
    req.admin = verified;
    next();
  } catch (error) {
    console.error(error);
    return res.status(403).json({ message: "Token no válido" });
  }
};

export default authenticateTokenAdmin;
