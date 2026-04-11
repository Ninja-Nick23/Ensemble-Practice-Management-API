module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Rehearsal", {
    date: { type: DataTypes.DATEONLY, allowNull: false },
    location: { type: DataTypes.STRING, allowNull: false },
    conductor: { type: DataTypes.STRING, allowNull: false },
    pieces: { type: DataTypes.TEXT }
  });
};
