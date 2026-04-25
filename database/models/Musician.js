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
    }
    // ❌ userId removed because the database does not have this column
  });

  Musician.associate = models => {
    // ❌ Remove this line because it depends on userId
    // Musician.belongsTo(models.User, { foreignKey: "userId" });

    // Keep this — it’s valid
    Musician.hasMany(models.PracticeSession, { foreignKey: "musicianId" });
  };

  return Musician;
};
