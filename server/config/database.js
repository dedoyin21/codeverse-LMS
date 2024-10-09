const { Sequelize } = require('sequelize')
const fs = require('fs')
require('dotenv').config()

const sslCert = fs.readFileSync(process.env.SSL_CERT_PATH).toString()

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: true,
        ca: sslCert,
      },
    },
    logging: console.log,
  }
)



async function testConnection() {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')

    const result = await sequelize.query('SELECT VERSION()')
    console.log('Database version:', result[0][0].version)
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  } finally {
    await sequelize.close()
  }
}

testConnection()

module.exports = { sequelize }
