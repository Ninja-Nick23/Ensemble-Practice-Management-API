const express = require("express");
const router = express.Router();
const db = require("../database/models");

router.get("/", async (req, res, next) => {
  try {
    const rehearsals = await db.Rehearsal.findAll();
    res.json(rehearsals);
  } catch (err) { next(err); }
});

router.get("/:id", async (req, res, next) => {
  try {
    const rehearsal = await db.Rehearsal.findByPk(req.params.id);
    if (!rehearsal) return res.status(404).json({ error: "Rehearsal not found" });
    res.json(rehearsal);
  } catch (err) { next(err); }
});

router.post("/", async (req, res, next) => {
  try {
    const rehearsal = await db.Rehearsal.create(req.body);
    res.status(201).json(rehearsal);
  } catch (err) { next(err); }
});

router.put("/:id", async (req, res, next) => {
  try {
    const rehearsal = await db.Rehearsal.findByPk(req.params.id);
    if (!rehearsal) return res.status(404).json({ error: "Rehearsal not found" });

    await rehearsal.update(req.body);
    res.json(rehearsal);
  } catch (err) { next(err); }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const rehearsal = await db.Rehearsal.findByPk(req.params.id);
    if (!rehearsal) return res.status(404).json({ error: "Rehearsal not found" });

    await rehearsal.destroy();
    res.status(204).send();
  } catch (err) { next(err); }
});

module.exports = router;
