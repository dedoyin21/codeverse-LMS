const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const Course = sequelize.define('Course', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    },
    isPremium: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  })

  return Course
}
