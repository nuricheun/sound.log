import express from "express";
import { upload } from "../middleware/multer";
import pool from "../db/db";

const router = express.Router();
const singleUpload = upload.any();

router.post("/", upload.single("audio"), function (req, res, next) {
  const { title, genre, artist_id, description } = req.body;
  console.log(req);
  res.send("Successfully uploaded   files!");
});

export default router;
