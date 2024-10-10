require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const session = require('express-session')
const passport = require('./auth/passport') 
const cors = require('cors')
const bcrypt = require('bcrypt')
const { Pool } = require('pg')
const { body, validationResult } = require('express-validator')

const app = express()
const PORT = process.env.PORT || 8080


const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: true,
    ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUaBayToSo0h6JeKQZhQ9sCJGKilMwDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvMjgwNDRkYWMtYzc1My00ODU4LTg3OGEtMTIyZWQ3Nzhj
M2UyIFByb2plY3QgQ0EwHhcNMjQxMDAzMTMxOTIyWhcNMzQxMDAxMTMxOTIyWjA6
MTgwNgYDVQQDDC8yODA0NGRhYy1jNzUzLTQ4NTgtODc4YS0xMjJlZDc3OGMzZTIg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAOCYLPjk
loRm5xDphiNxb+MvyQku7vUIzx6lTzepx3lMhyhWYb57zyAdZxd3EypAY0UELQOx
FDubCZRcJkBU5Eaz6SbZA4s5TNts5GNFjJ4vNpmR5jDD6oRdOr+SOwqKrFizyRjQ
eg2fpqriy9RfxenuhVl988BZHDAKNZGLPdxMt2s7dDZb6WDvKucGsCICDYM5JGG/
inqp3IQ+RnPEdAdz++zVsBBp0/rENrs1Mm7LmLkLEXqaN3akYs2DkaHuwUYP8c4H
CdRJRtvQfmtcAd9DwdrGeCik4tdFS0aXhNigyrukKYv8aifzqKpTgmsH1AMcGAqu
GIWFdxuZ12YoecvOhmbdrHrtgOpeFE9EOJw9ztXNSrEm7zeUZnqvv9Rd1SytXDaH
EpQFrbycC/2kRVykH4zbR+hx0nYql2IqHMLIXqHGN/gGtlSBpSft38af4jI3tzB2
zakcp9xij58pjTt0yE4l/D3I6LdngIzN4fNuw2cPpeyb+4KcPLYn1HLeyQIDAQAB
oz8wPTAdBgNVHQ4EFgQUrv5rzX4MmWkSOVGD2QIqJ3sX2SQwDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBANzXKSNkYssF6mPh
NJ43iGzFO51MV2L2GwRDF6G3rB/qWqGX1LcC/JGpavgYRinXMQyt+V9uKtUuxghE
P8UaSkeHgAVAFJmP3NMh8f8YNp8H9GtMRGqeLhdSAiuqo5ZtfaD7SwED9NkcTmcF
ttLAqTTOL4y55N55Do08iG6HvkgubB9COAC4mmC2iUgqDOoBzhlsvFOwPB8Axvkd
YoSWNJH2c8De9Q2qpeyGh+Nh53i12JZE0HoQ0/Hvhta4sgQbd6382osDczTW6RPm
0hDFncp4aunMD2ID93eacksS3yfQajmGTt9uPjJVM+wT3NfPnV6KlOZfOciR0sGz
/2jUKXYkIsg9ZK9nWvHOHa27H3fJITBUU0lQB78UcqX0W96R8GKnlOigX5I4AjPZ
t/cZKEHQbSEMW47UffKyjf+MrUEme8sOQeBFNsOui01mnjSKfI0ZnmAdivfZrNe/
QodqdTKhsPxoviGsXAEYIg/eKohYSLgGU73bGEzgMbXUl9D28A==
-----END CERTIFICATE-----`,
  },
})


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

      const hashedPassword = await bcrypt.hash(password, 10)

      const client = await pool.connect()
      const query =
        'INSERT INTO users (email, hashed_password, name) VALUES ($1, $2, $3) RETURNING *'
      const values = [email, hashedPassword, name]

      const result = await client.query(query, values)
      const user = result.rows[0]

      client.release()

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


app.get('/checkAuth', (req, res) => {
  if (req.isAuthenticated()) {
    res.sendStatus(200)
  } else {
    res.sendStatus(401)
  }
})

app.get('/logout', (req, res) => {
  req.logout()
  res.json({ message: 'Logout successful' })
})

async function startServer() {
  try {
    const client = await pool.connect()
    console.log('Database connection has been established successfully.')
    client.release()

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
