const express = require("express");
const router = express.Router();
const db = require("../database/models");

router.get("/", async (req, res, next) => {
  try {
    const sessions = await db.PracticeSession.findAll();
    res.json(sessions);
  } catch (err) { next(err); }
});

router.get("/:id", async (req, res, next) => {
  try {
    const session = await db.PracticeSession.findByPk(req.params.id);
    if (!session) return res.status(404).json({ error: "Practice session not found" });
    res.json(session);
  } catch (err) { next(err); }
});

router.post("/", async (req, res, next) => {
  try {
    const session = await db.PracticeSession.create(req.body);
    res.status(201).json(session);
  } catch (err) { next(err); }
});

router.put("/:id", async (req, res, next) => {
  try {
    const session = await db.PracticeSession.findByPk(req.params.id);
    if (!session) return res.status(404).json({ error: "Practice session not found" });

    await session.update(req.body);
    res.json(session);
  } catch (err) { next(err); }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const session = await db.PracticeSession.findByPk(req.params.id);
    if (!session) return res.status(404).json({ error: "Practice session not found" });

    await session.destroy();
    res.status(204).send();
  } catch (err) { next(err); }
});

module.exports = router;
