
module.exports = function(sequelize, DataTypes) {
  const Message = sequelize.define("Message", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    text: DataTypes.STRING,
  });

  Message.associate = function(models) {
    Message.belongsTo(models.User, {
      foreignKey: 'UserId'
    });
    Message.belongsTo(models.Location, {
      foreignKey: 'LocationId'
    });
  };
  return Message;
};
