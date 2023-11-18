const express = require('express');
import {Request, Response} from 'express';
import UserModel from '../models/UserModel';
import passport from '../middlewares/passport';

const authRouter = express.Router();
const session = require('express-session');
const bcrypt = require('bcrypt');
const saltRounds = 10;

authRouter.post('/register', async (req: Request, res: Response) => {
  let {username, email, password} = req.body;

  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const user = new UserModel();
  const checkExists = await user.findExistingUser(username, email);

  if (checkExists) {
    res.send({error: 'Cannot register user, already exists'});

    return;
  }
  const register = await user.create({
    username: username,
    email: email,
    password: hashedPassword,
  });
  res.send(register);
});

authRouter.use(
  session({
    secret: 'cats',
    resave: false,
    saveUninitialized: true,
    cookie: {originalMaxAge: 300000},
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

export default authRouter;
