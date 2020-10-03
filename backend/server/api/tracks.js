import express from "express";
import { upload } from "../middleware/multer";
import { updateTrackById } from "../utils/queries/tracks";
import pool from "../db/db";

const trackUpload = upload.any();
const router = express.Router();

/**
 * fetch all tracks
 */
router.get("/", async (req, res) => {
  try {
    const tracks = await pool.query(
      `SELECT t.id as "trackId", t.title as title, t.audio as "audioUrl", t.image as "imageUrl", u.id as "artistId", u.username as username, u.location as location, l.liked_by as "likedByUser" FROM tracks as t LEFT JOIN likes as l ON t.id = l.track INNER JOIN users as u ON t.artist = u.id`
    );

    res.json(tracks.rows);
  } catch (err) {
    res.status(500).send("server error");
  }
});

/**
 * fetch a track by trackId
 */
router.get("/:trackId", async (req, res) => {
  const { trackId } = req.params;

  try {
    const track = await pool.query(
      `SELECT t.id as "trackId", t.title as title, t.genre as genre, t.description as description, t.audio as "audioUrl", t.image as "imageUrl", u.id as "artistId", u.username as username, u.location as location, l.liked_by as "likedByUser" FROM tracks as t LEFT JOIN likes as l ON t.id = l.track INNER JOIN users as u ON t.artist = u.id WHERE t.id = $1`,
      [trackId]
    );
    res.json(track.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
});

/**
 * fetch a track by trackId
 */
router.get("/:trackId/:userId", async (req, res) => {
  const { trackId, userId } = req.params;
  try {
    const likedByCurrentUser = await pool.query(
      "SELECT * FROM likes WHERE liked_by=$1 AND track=$2",
      [userId, trackId]
    );
    if (likedByCurrentUser.rows.length > 0) {
      await pool.query("DELETE FROM likes WHERE liked_by=$1 AND track=$2", [
        userId,
        trackId,
      ]);
    } else {
      await pool.query("INSERT INTO likes (liked_by, track) VALUES ($1, $2)", [
        userId,
        trackId,
      ]);
    }

    const track = await pool.query(
      `SELECT t.id as "trackId", t.title as title, t.track_file as "audioUrl", t.image as "imageUrl", u.id as "artistId", u.username as username, u.location as location, l.liked_by as "likedByUser" FROM tracks as t LEFT JOIN likes as l ON t.id = l.track INNER JOIN users as u ON t.artist = u.id WHERE l.liked_by=$1 AND t.id=$2`,
      [userId, trackId]
    );

    res.json(track.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
});

/**
 * delete a track by trackId
 */
router.delete("/:trackId", async (req, res) => {
  const { trackId } = req.params;

  try {
    const deleted = await pool.query("DELETE FROM tracks WHERE id=$1", [
      trackId,
    ]);

    res.json(deleted.rows[0]);
  } catch (err) {
    res.status(500).send("server error");
  }
});

/**
 * patch(update) a track data by trackId
 */
router.patch("/:trackId", trackUpload, async (req, res) => {
  const { trackId } = req.params;
  const [updateQuery, values] = updateTrackById(trackId, req.body, req.files);

  console.log(updateQuery, values);
  try {
    const track = await pool.query(updateQuery, values);
    res.json(track.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
});

//create a track data using multer and multer-s3
router.post("/", trackUpload, async function (req, res) {
  const { title, genre, artist, description } = req.body;
  const image = req.files.filter((e) => e.fieldname === "image");
  const audio = req.files.filter((e) => e.fieldname === "audio");

  try {
    const newTrack = await pool.query(
      "INSERT INTO tracks (title, artist, genre, description, image, audio) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [title, artist, genre, description, image[0].location, audio[0].location]
    );

    const track = await pool.query(
      "SELECT tracks.*, users.* FROM tracks INNER JOIN users ON users.id = tracks.artist WHERE users.id = $1",
      [artist]
    );
    res.json(track.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

export default router;
