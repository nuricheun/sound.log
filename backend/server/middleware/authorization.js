import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

/**
 * check user's authorization through jwt token from req.header
 *
 */

export default (req, res, next) => {
  const jwtToken = req.header("jwtToken");
  console.log(jwtToken);
  if (!jwtToken) {
    return res.status(403).json({ msg: "authorization denied" });
  }

  // Verify token
  try {
    const payload = jwt.verify(jwtToken, process.env.JWT_KEY);

    req.userId = payload.user.userId;
    next();
  } catch (err) {
    res.status(401).json("Not Authorized");
  }
};
