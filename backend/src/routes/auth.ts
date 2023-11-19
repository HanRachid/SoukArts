const express = require('express');
import {Request, Response} from 'express';
import UserModel from '../models/UserModel';
import passport from '../middlewares/authpassport';

const authRouter = express.Router();
const session = require('express-session');
const bcrypt = require('bcrypt');
const saltRounds = 10;

authRouter.post('/register', async (req: Request, res: Response) => {
  const {username, email, password} = req.body;

  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const user = new UserModel(username, email, hashedPassword);
  const checkExists = await UserModel.findModelUserEmail(username, email);

  console.log(user);

  if (checkExists) {
    console.log('Cannot register user, already exists');
    res.send({error: 'nah'});

    return;
  }
  const register = await user.registerModel();
  res.send(register);
});

authRouter.use(
  session({
    secret: 'cats',
    resave: false,
    saveUninitialized: true,
    cookie: {expires: 300},
  })
);

authRouter.use(passport.initialize());
authRouter.use(passport.session());
authRouter.use(express.urlencoded({extended: false}));

authRouter.post(
  '/login',
  (req, res, next) => {
    console.log(req.body);

    if (req.isAuthenticated()) {
      res.send({isAuth: true, user: req.user});
    } else {
      next();
    }
  },
  passport.authenticate('local', {
    successRedirect: '/auth/success',
    failureRedirect: '/auth/failure',
  })
);

authRouter.get('/success', (req, res) => {
  res.send({isAuth: true, user: req.user, cookie: req.session.cookie});
});

authRouter.get('/failure', (req, res) => {
  console.log('failure!');
  res.send({logged: false});
});

authRouter.get('/check', (req, res) => {
  if (req.user) {
    res.json({ isAuthenticated: true, user: req.user });
  } else {
    res.json({ isAuthenticated: false });
  }
});


export default authRouter;
