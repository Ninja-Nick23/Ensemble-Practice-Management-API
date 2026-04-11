module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Musician", {
    name: { type: DataTypes.STRING, allowNull: false },
    instrument: { type: DataTypes.STRING, allowNull: false },
    skillLevel: { type: DataTypes.STRING, allowNull: false },
    yearsExperience: { type: DataTypes.INTEGER, defaultValue: 0 }
  });
};
