const express = require("express");
const router = express.Router();
const db = require("../database/models");

router.get("/", async (req, res, next) => {
  try {
    const musicians = await db.Musician.findAll();
    res.json(musicians);
  } catch (err) { next(err); }
});

router.get("/:id", async (req, res, next) => {
  try {
    const musician = await db.Musician.findByPk(req.params.id);
    if (!musician) return res.status(404).json({ error: "Musician not found" });
    res.json(musician);
  } catch (err) { next(err); }
});

router.post("/", async (req, res, next) => {
  try {
    const musician = await db.Musician.create(req.body);
    res.status(201).json(musician);
  } catch (err) { next(err); }
});

router.put("/:id", async (req, res, next) => {
  try {
    const musician = await db.Musician.findByPk(req.params.id);
    if (!musician) return res.status(404).json({ error: "Musician not found" });

    await musician.update(req.body);
    res.json(musician);
  } catch (err) { next(err); }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const musician = await db.Musician.findByPk(req.params.id);
    if (!musician) return res.status(404).json({ error: "Musician not found" });

    await musician.destroy();
    res.status(204).send();
  } catch (err) { next(err); }
});

module.exports = router;
