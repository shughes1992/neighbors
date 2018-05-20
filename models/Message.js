
module.exports = function(sequelize, DataTypes) {
  const Message = sequelize.define("Message", {
    text: DataTypes.STRING,
    user: DataTypes.STRING,
    location: DataTypes.STRING,
  });

  Message.associate = function(models) {
    Message.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Message;
};
