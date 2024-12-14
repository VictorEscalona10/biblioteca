import { configDotenv } from "dotenv";

configDotenv();

const config = {
  PORT: process.env.PORT || 3000,
  SALT: process.env.SALT,
  JWT_SECRET_ADMIN: process.env.JWT_SECRET_ADMIN,
  JWT_SECRET: process.env.JWT_SECRET,
};

export default config;
