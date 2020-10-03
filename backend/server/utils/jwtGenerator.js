import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const jwtGenerator = (id) => {
  const payload = {
    user: {
      id,
    },
  };
  return jwt.sign(payload, process.env.JWT_KEY, { expiresIn: "1h" });
};
