import { NextFunction, Request, Response } from 'express';
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
import UserModel from '../models/UserModel';

passport.use(new LocalStrategy(
    async function (username, password, done) {
        try {
            const user = await UserModel.findModelpw(username, password);
            if (!user) {
                return done(null, false, { message: 'Incorrect username or password.' });
            }
            // Assuming findModelpw returns the user object if authenticated

            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }
));

passport.serializeUser(function (user, done) {
    done(null, user.id);  // Ensure user has an 'id' field
});

passport.deserializeUser(async (id, done) => {
    console.log('Deserializing user ID:', id);
    try {
        const user = await UserModel.findModel(id); // Replace with your method to find a user by ID
        console.log('Deserialized user:', user);
        done(null, user);
    } catch (err) {
        console.error('Error in deserializeUser:', err);
        done(err, null);
    }
});


export default passport