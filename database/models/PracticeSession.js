module.exports = (sequelize, DataTypes) => {
  return sequelize.define("PracticeSession", {
    duration: { type: DataTypes.INTEGER, allowNull: false },
    focusArea: { type: DataTypes.STRING, allowNull: false },
    notes: { type: DataTypes.TEXT },
    date: { type: DataTypes.DATEONLY, allowNull: false }
  });
};
