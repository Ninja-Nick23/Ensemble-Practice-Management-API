const express = require("express");
const router = express.Router();
const db = require("../database/models");
const auth = require("../middleware/auth");

// GET all sessions
router.get("/", auth, async (req, res, next) => {
  try {
    const sessions = await db.PracticeSession.findAll();
    res.json(sessions);
  } catch (err) { next(err); }
});

// CREATE session
router.post("/", auth, async (req, res, next) => {
  try {
    const { duration, focusArea, date, musicianId } = req.body;

    if (!duration || duration <= 0)
      return res.status(400).json({ error: "Duration must be positive" });

    if (!focusArea)
      return res.status(400).json({ error: "Focus area required" });

    if (!date)
      return res.status(400).json({ error: "Date required" });

    if (!musicianId)
      return res.status(400).json({ error: "musicianId required" });

    const session = await db.PracticeSession.create({
      duration,
      focusArea,
      date,
      musicianId
    });

    res.status(201).json(session);
  } catch (err) { next(err); }
});

module.exports = router;
