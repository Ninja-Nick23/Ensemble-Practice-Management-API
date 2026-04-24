// database/models/musician.js
module.exports = (sequelize, DataTypes) => {
  const Musician = sequelize.define("Musician", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    instrument: {
      type: DataTypes.STRING,
      allowNull: false
    },
    skillLevel: {
      type: DataTypes.STRING,
      allowNull: false
    },
    yearsExperience: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Musician.associate = models => {
    Musician.belongsTo(models.User, { foreignKey: "userId" });
    Musician.hasMany(models.PracticeSession, { foreignKey: "musicianId" });
  };

  return Musician;
};
