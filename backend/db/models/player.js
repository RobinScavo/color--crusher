'use strict';
module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define('Player', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hiScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    hashedPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    }

  }, {});
  Player.associate = function(models) {
    // associations can be defined here
  };
  return Player;
};
