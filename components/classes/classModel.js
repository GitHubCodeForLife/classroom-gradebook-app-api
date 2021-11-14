const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/db.config");

class Class extends Model {}
Class.init(
  {
    className: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    classSection: {
      type: DataTypes.STRING,
    },
    subject: {
      type: DataTypes.STRING,
    },
    room: {
      type: DataTypes.STRING,
    },
    inviteCode: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    }
  },
  {
    //timestamps: false,
    sequelize,
    modelName: "Class",
  }
);

module.exports = Class;
