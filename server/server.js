require('dotenv').config() 
const express = require('express')
const helmet = require('helmet')
const session = require('express-session')
const passport = require('./auth/passport')
const cors = require('cors')
const { sequelize } = require('./config/database')

const app = express()
const PORT = process.env.PORT || 8080

app.set('trust proxy', 1)

app.use(helmet())
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
  })
)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
app.use(passport.initialize());
app.use(passport.session());

const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173/',
  optionsSuccessStatus: 200,
}

app.get('/', (req, res) => {
  res.send('Welcome to the LMS API')
})

app.post('/auth/local/signup', async (req, res, next) => {
  try {
    const { email, password, name } = req.body
    const user = await User.create({ email, password, name })
    req.login(user, (err) => {
      if (err) return next(err)
      res.json({ message: 'Signup successful', user })
    })
  } catch (error) {
    next(error)
  }
})

app.post('/auth/local/signin', passport.authenticate('local'), (req, res) => {
  res.json({ message: 'Signin successful', user: req.user })
})

app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
)

app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/dashboard')
  }
)

app.get(
  '/auth/github',
  passport.authenticate('github', { scope: ['user:email'] })
)

app.get(
  '/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/dashboard')
  }
)

app.get('/logout', (req, res) => {
  req.logout()
  res.json({ message: 'Logout successful' })
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
