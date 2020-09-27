import express from "express";

import pool from "../db/db";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const genres = await pool.query("SELECT * FROM genres");
    res.json(genres.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
