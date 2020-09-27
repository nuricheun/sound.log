import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const jwtGenerator = (user_id) => {
  const payload = {
    user: {
      id: user_id,
    },
  };
  return jwt.sign(payload, process.env.JWT_KEY, { expiresIn: "1h" });
};
