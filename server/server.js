require('dotenv').config() 
const express = require('express')
const helmet = require('helmet')
const session = require('express-session')
const cors = require('cors')
const { sequelize } = require('./config/database')

const app = express()
const PORT = process.env.PORT || 8080

app.set('trust proxy', 1)

app.use(helmet())
app.use(express.urlencoded({ extended: true }))

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: 'shhhh, very secret',
  })
)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  optionsSuccessStatus: 200,
}

app.get('/', (req, res) => {
  res.send('Welcome to the LMS API')
})

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`)
  try {
    await sequelize.authenticate()
    console.log('Database connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
})

module.exports = app
