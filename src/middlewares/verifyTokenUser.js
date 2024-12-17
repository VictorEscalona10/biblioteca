import jwt from "jsonwebtoken";
import config from "../config/config.js";

const authenticateTokenUser = (req, res, next) => {
  const token = req.cookies.userToken;

  if (!token) {
    return res.status(401).render("index", { message: "No tienes permiso para acceder" });
  }

  try {
    const verified = jwt.verify(token, config.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    console.error(error);
    return res.status(403).render("index", { message: "No tienes permiso para acceder" });
  }
};

export default authenticateTokenUser;
