const { Sequelize } = require("sequelize");
const path = require("path");

// Create Sequelize instance
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "database.sqlite"),
  logging: false
});

// Load models
const User = require("./models/User")(sequelize);
const Musician = require("./models/Musician")(sequelize);
const PracticeSession = require("./models/PracticeSession")(sequelize);
const Rehearsal = require("./models/Rehearsal")(sequelize);
const RehearsalAttendance = require("./models/RehearsalAttendance")(sequelize);

// Export everything
module.exports = {
  sequelize,
  User,
  Musician,
  PracticeSession,
  Rehearsal,
  RehearsalAttendance
};
