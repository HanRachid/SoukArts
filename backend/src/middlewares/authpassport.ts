import { NextFunction, Request, Response } from 'express';
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
import UserModel from '../models/UserModel';

const bcrypt = require('bcrypt');

passport.use(new LocalStrategy(async (username, password, done) => {
    try {
        // Assuming findModelpw returns the user with hashed password
        const user = await UserModel.findModelpw(username);

        if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
        }

        // Compare hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return done(null, false, { message: 'Incorrect password!' });
        }

        console.log(user);
        return done(null, user);
    } catch (err) {
        return done(err);
    }
}));


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
