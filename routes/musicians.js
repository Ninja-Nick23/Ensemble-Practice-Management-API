const express = require("express");
const router = express.Router();
const db = require("../database/models");
const auth = require("../middleware/auth");

// GET all musicians
router.get("/", auth, async (req, res, next) => {
  try {
    const musicians = await db.Musician.findAll(); // no userId filter
    res.json(musicians);
  } catch (err) { next(err); }
});

// GET one musician
router.get("/:id", auth, async (req, res, next) => {
  try {
    const musician = await db.Musician.findByPk(req.params.id);

    if (!musician)
      return res.status(404).json({ error: "Musician not found" });

    res.json(musician); // no userId check
  } catch (err) { next(err); }
});

// CREATE musician
router.post("/", auth, async (req, res, next) => {
  try {
    const musician = await db.Musician.create({
      ...req.body
      // removed userId
    });
    res.status(201).json(musician);
  } catch (err) { next(err); }
});

// UPDATE musician
router.put("/:id", auth, async (req, res, next) => {
  try {
    const musician = await db.Musician.findByPk(req.params.id);

    if (!musician)
      return res.status(404).json({ error: "Musician not found" });

    await musician.update(req.body); // no userId check
    res.json(musician);
  } catch (err) { next(err); }
});

// DELETE musician
router.delete("/:id", auth, async (req, res, next) => {
  try {
    const musician = await db.Musician.findByPk(req.params.id);
    if (!musician)
      return res.status(404).json({ error: "Musician not found" });

    await musician.destroy();
    res.status(204).send();
  } catch (err) { next(err); }
});

module.exports = router;
