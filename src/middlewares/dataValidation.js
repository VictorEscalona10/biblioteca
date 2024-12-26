import { validationResult } from 'express-validator';

export const validateRegister = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const extractedErrors = errors.array().map(err => err.msg);
    return res.status(400).render('auth/registerUser', { message: 'Ha ocurrido un error: ' + extractedErrors.join(', ') });
  }
  next();
};

export const validateBooks = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const extractedErrors = errors.array().map(err => err.msg);
      return res.status(400).render('booksAdmin/addBook', { message: 'Ha ocurrido un error: ' + extractedErrors.join(', ') });
    }
    next();
  };
