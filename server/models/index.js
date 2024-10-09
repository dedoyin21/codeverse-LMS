const { Sequelize } = require('sequelize')
const config = require('../config/database')

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: 'postgres',
  }
)

const User = require('./user')(sequelize)
const Course = require('./course')(sequelize)
const Enrollment = require('./enrollment')(sequelize)
const Content = require('./content')(sequelize)
const Progress = require('./progress')(sequelize)
const Payment = require('./payment')(sequelize)

// Associations
User.hasMany(Enrollment)
Enrollment.belongsTo(User)

Course.hasMany(Enrollment)
Enrollment.belongsTo(Course)

Course.hasMany(Content)
Content.belongsTo(Course)

User.hasMany(Progress)
Progress.belongsTo(User)

Course.hasMany(Progress)
Progress.belongsTo(Course)

Content.hasMany(Progress)
Progress.belongsTo(Content)

User.hasMany(Payment)
Payment.belongsTo(User)

Course.hasMany(Payment)
Payment.belongsTo(Course)

module.exports = {
  sequelize,
  User,
  Course,
  Enrollment,
  Content,
  Progress,
  Payment,
}
