const express = require("express");
const router = express.Router();
const db = require("../database/models");
const auth = require("../middleware/auth");
const { requireRole } = require("../middleware/roles");

// GET all musicians
router.get("/", auth, async (req, res, next) => {
  try {
    const where = req.user.role === "admin"
      ? {}
      : { userId: req.user.id };

    const musicians = await db.Musician.findAll({ where });
    res.json(musicians);
  } catch (err) { next(err); }
});

// GET one musician
router.get("/:id", auth, async (req, res, next) => {
  try {
    const musician = await db.Musician.findByPk(req.params.id);

    if (!musician)
      return res.status(404).json({ error: "Musician not found" });

    if (req.user.role !== "admin" && musician.userId !== req.user.id)
      return res.status(403).json({ error: "Forbidden" });

    res.json(musician);
  } catch (err) { next(err); }
});

// CREATE musician
router.post("/", auth, async (req, res, next) => {
  try {
    const musician = await db.Musician.create({
      ...req.body,
      userId: req.user.id
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

    if (req.user.role !== "admin" && musician.userId !== req.user.id)
      return res.status(403).json({ error: "Forbidden" });

    await musician.update(req.body);
    res.json(musician);
  } catch (err) { next(err); }
});

// DELETE musician (admin only)
router.delete("/:id",
  auth,
  requireRole("admin"),
  async (req, res, next) => {
    try {
      const musician = await db.Musician.findByPk(req.params.id);
      if (!musician)
        return res.status(404).json({ error: "Musician not found" });

      await musician.destroy();
      res.status(204).send();
    } catch (err) { next(err); }
  }
);

module.exports = router;
