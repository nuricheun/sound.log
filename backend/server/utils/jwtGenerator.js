import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const jwtGenerator = (userId) => {
  const payload = {
    user: {
      userId,
    },
  };
  return jwt.sign(payload, process.env.JWT_KEY, { expiresIn: "1h" });
};
