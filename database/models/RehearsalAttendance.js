module.exports = (sequelize, DataTypes) => {
  return sequelize.define("RehearsalAttendance", {
    status: { type: DataTypes.STRING, defaultValue: "present" }
  });
};
