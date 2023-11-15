import {NextFunction, Request, Response} from 'express';
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
import UserModel from '../models/UserModel';

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await UserModel.findModelpw(username, password);

      if (!user) {
        return done(null, false, {message: 'Incorrect logins!'});
      }
      if (user.password !== password) {
        return done(null, false, {message: 'Incorrect password!'});
      }
      console.log(user);

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await UserModel.findModel(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

export default passport;
