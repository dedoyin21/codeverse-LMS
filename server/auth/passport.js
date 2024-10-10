const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy
const GitHubStrategy = require('passport-github2').Strategy
const bcrypt = require('bcrypt')
const {
  createUser,
  findUserByEmail,
  findUserByGoogleId,
  findUserByGitHubId,
  findUserById,
  updateUserGoogleId,
  updateUserGithubId,
} = require('../models/user')

passport.use(
  new LocalStrategy(
    { usernameField: 'emailOrUsername' },
    async (emailOrUsername, password, done) => {
      try {
        const user = await findUserByEmail(emailOrUsername)
        if (!user) {
          return done(null, false, {
            message: 'Incorrect email/username or password.',
          })
        }
        const isValid = await bcrypt.compare(password, user.hashed_password)
        if (!isValid) {
          return done(null, false, {
            message: 'Incorrect email/username or password.',
          })
        }
        return done(null, user)
      } catch (error) {
        return done(error)
      }
    }
  )
)

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await findUserByGoogleId(profile.id)
        if (!user) {
          user = await findUserByEmail(profile.emails[0].value)
          if (user) {
            user = await updateUserGoogleId(user.id, profile.id)
          } else {
            user = await createUser({
              email: profile.emails[0].value,
              name: profile.displayName,
              google_id: profile.id,
              role: 'user', 
            })
          }
        }
        return done(null, user)
      } catch (error) {
        return done(error)
      }
    }
  )
)

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
      scope: ['user:email'], 
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await findUserByGitHubId(profile.id)
        if (!user) {
          const email =
            profile.emails && profile.emails[0]
              ? profile.emails[0].value
              : `${profile.username}@github.com`

          user = await findUserByEmail(email)
          if (user) {
            user = await updateUserGithubId(user.id, profile.id)
          } else {
            user = await createUser({
              email: email,
              name: profile.displayName || profile.username,
              github_id: profile.id,
              role: 'student',
            })
          }
        }
        return done(null, user)
      } catch (error) {
        return done(error)
      }
    }
  )
)
passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  try {
    const user = await findUserById(id)
    done(null, user)
  } catch (error) {
    done(error)
  }
})

module.exports = passport
