import express from "express";
import pool from "../db/db";

const router = express.Router();

router.get("/:trackId", async (req, res) => {
  const { trackId } = req.params;
  try {
    const comments = await pool.query(
      "SELECT * FROM comments WHERE track_id = $1",
      [trackId]
    );

    res.json(comments.rows);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

router.post("/", async (req, res) => {
  const { userId, trackId, body } = req.body;

  try {
    const comment = await pool.query(
      "INSERT INTO comments (user_id, track_id, body) VALUES ( $1, $2, $3 )",
      [userId, trackId, body]
    );
    res.send(comment.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

module.exports = router;
