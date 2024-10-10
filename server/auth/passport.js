const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const { User } = require('../models')


passport.use(new LocalStrategy(
    { usernameField: 'email'},
    async (email, password, done) => {
        try {
            const user = await User.findOne({ where: { email } });
            if (!user) {
                return done(null, false, { message: 'Incorrect email.'});
            }
            const isValid = await user.validPassword(password);
            if (!isValid) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        } catch (error) {
            return done(error);
        }
    }
))

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({
          where: { googleId: profile.id },
        })

        if (!user) {
          user = await User.create({
            email: profile.emails[0].value,
            name: profile.displayName,
            password: '', 
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
  new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: '/auth/github/callback'
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await User.findOne({ where: { githubId: profile.id } });
        if (!user) {
            user = await User.create({
                email: profile.emails[0].value,
                name: profile.displayName,
                githubId: profile.id,
            });
        }
        return done(null, user);
    } catch (error) {
        return done(error);
    }
  }
))

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id)
    done(null, user)
  } catch (error) {
    done(error)
  }
})

module.exports = passport
