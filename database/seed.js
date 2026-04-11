const db = require("./models");

(async () => {
  await db.sequelize.sync({ force: true });

  const musicians = await db.Musician.bulkCreate([
    { name: "Alex Johnson", instrument: "Trumpet", skillLevel: "Intermediate", yearsExperience: 4 },
    { name: "Maria Lopez", instrument: "Flute", skillLevel: "Advanced", yearsExperience: 6 }
  ]);

  await db.PracticeSession.bulkCreate([
    { musicianId: musicians[0].id, duration: 45, focusArea: "Lip slurs", date: "2026-04-10" },
    { musicianId: musicians[1].id, duration: 60, focusArea: "Tone work", date: "2026-04-11" }
  ]);

  await db.Rehearsal.bulkCreate([
    { date: "2026-04-20", location: "Band Hall", conductor: "Mr. Smith", pieces: "Holst Suite" }
  ]);

  console.log("Seed complete.");
  process.exit();
})();
