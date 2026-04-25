const { Sequelize, DataTypes } = require("sequelize");
const path = require("path");

// Initialize Sequelize with SQLite
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "..", "ensemble.db"),
  logging: false
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Import ALL models (User was missing before)
db.User = require("./User")(sequelize, DataTypes);
db.Musician = require("./Musician")(sequelize, DataTypes);
db.PracticeSession = require("./PracticeSession")(sequelize, DataTypes);
db.Rehearsal = require("./Rehearsal")(sequelize, DataTypes);
db.RehearsalAttendance = require("./RehearsalAttendance")(sequelize, DataTypes);

// Associations
db.Musician.hasMany(db.PracticeSession, { foreignKey: "musicianId" });
db.PracticeSession.belongsTo(db.Musician, { foreignKey: "musicianId" });

db.Musician.belongsToMany(db.Rehearsal, {
  through: db.RehearsalAttendance,
  foreignKey: "musicianId"
});
db.Rehearsal.belongsToMany(db.Musician, {
  through: db.RehearsalAttendance,
  foreignKey: "rehearsalId"
});

module.exports = db;
