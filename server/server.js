require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const session = require('express-session')
const passport = require('./auth/passport') // Passport strategy setup
const cors = require('cors')
const { sequelize } = require('./config/database')
const { body, validationResult } = require('express-validator')

const app = express()
const PORT = process.env.PORT || 8080

app.set('trust proxy', 1)

app.use(helmet())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    },
  })
)

app.use(passport.initialize())
app.use(passport.session())

const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))

const callbackURL =
  process.env.NODE_ENV === 'production'
    ? `${process.env.BACKEND_URL}/auth`
    : 'http://localhost:8080/auth'

app.get('/', (req, res) => {
  res.send('Welcome to the LMS API')
})

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    callbackURL: `${callbackURL}/google/callback`,
  })
)

app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login',
    callbackURL: `${callbackURL}/google/callback`,
  }),
  (req, res) => {
    res.redirect('http://localhost:5137/dashboard')
  }
)
app.get(
  '/auth/github',
  passport.authenticate('github', {
    scope: ['user:email'],
    callbackURL: `${callbackURL}/github/callback`,
  })
)

app.get(
  '/auth/github/callback',
  passport.authenticate('github', {
    failureRedirect: '/login',
    callbackURL: `${callbackURL}/github/callback`,
  }),
  (req, res) => {
    res.redirect('http://localhost:5137/dashboard')
  }
)

app.post(
  '/auth/local/signup',
  [
    body('email').isEmail().withMessage('Enter a valid email'),
    body('password').not().isEmpty().withMessage('Password is required'),
    body('name').not().isEmpty().withMessage('Name is required'),
  ],
  async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
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
  }
)

app.post(
  '/auth/local/signin',
  [
    body('emailOrUsername')
      .not()
      .isEmpty()
      .withMessage('Email or username is required'),
    body('password').not().isEmpty().withMessage('Password is required'),
  ],
  passport.authenticate('local'),
  (req, res) => {
    res.json({ message: 'Signin successful', user: req.user })
  }
)


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

app.get('/checkAuth', (req, res) => {
  if (req.isAuthenticated()) {
    res.sendStatus(200)
  } else {
    res.sendStatus(401)
  }
})

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

async function startServer() {
  try {
    await sequelize.authenticate()
    console.log('Database connection has been established successfully.')

    await sequelize.sync({ force: true })
    console.log('Database synced.')

    /* await seedDatabase()
    console.log('Database seeded successfully.') */

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (error) {
    console.error('Unable to start server:', error)
    process.exit(1)
  }
}

startServer()

module.exports = app
