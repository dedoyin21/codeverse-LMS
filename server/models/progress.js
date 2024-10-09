const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const Progress = sequelize.define('Progress', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  })

  return Progress
}
