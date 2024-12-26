import { body } from "express-validator";

export const bookValidationRules = [
  body("title").notEmpty().withMessage("El título es obligatorio"),
  body("author").notEmpty().withMessage("El autor es obligatorio"),
  body("genre")
    .isString()
    .withMessage("El género debe ser una cadena de texto"),
  body("publishDate")
    .isInt()
    .withMessage("El año de publicación debe ser un número entero"),
];

export const registerValidationRules = [
  body("username")
    .notEmpty()
    .withMessage("El nombre de usuario es obligatorio"),
  body("email").isEmail().withMessage("El email no es válido"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres")
    .matches(/[A-Z]/)
    .withMessage("La contraseña debe contener al menos una letra mayúscula")
    .matches(/[0-9]/)
    .withMessage("La contraseña debe contener al menos un número")
    .matches(/[^A-Za-z0-9]/)
    .withMessage("La contraseña debe contener al menos un carácter especial"),
  body("repeat_password").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Las contraseñas no coinciden");
    }
    return true;
  }),
];
