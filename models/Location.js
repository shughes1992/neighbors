
module.exports = function(sequelize, DataTypes) {
  const Location = sequelize.define("Location", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    neighborhood: DataTypes.STRING,
  });

  Location.associate = (models) => {
    Location.hasMany(models.Message, {
      onDelete: "cascade"
    });
  };
  return Location;
};
