import jwt from "jsonwebtoken";
import KEYS from "../../config/keys";

export const jwtGenerator = (userId) => {
  const payload = {
    user: {
      userId,
    },
  };
  return jwt.sign(payload, KEYS.JWT_KEY, { expiresIn: "1h" });
};
