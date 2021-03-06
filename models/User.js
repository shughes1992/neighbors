
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the User model a name of type STRING
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
  });

  User.associate = function(models) {
    // Associating User with message
    // When an User is deleted, also delete any associated messages
    User.hasMany(models.Message, {
      onDelete: "cascade"
    });
  };


  return User;
};
