const express = require('express');
import {Request, Response} from 'express';
import UserModel from '../models/UserModel';
import passport from '../middlewares/passport';

const authRouter = express.Router();
const session = require('express-session');
const bcrypt = require('bcrypt');
const saltRounds = 10;

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

authRouter.post('/register', async (req: Request, res: Response) => {
  const {username, email, password} = req.body;

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

authRouter.post(
  '/login',
  (req: Request, res: Response, next) => {
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

authRouter.get('/success', (req: Request, res: Response) => {
  res.send({isAuth: true, user: req.user, cookie: req.session.cookie});
});

authRouter.get('/:id/forgot', (req: Request, res: Response) => {
  res.send({isAuth: true, user: req.user, cookie: req.session.cookie});
});

authRouter.get('/:id/profile', (req: Request, res: Response) => {
  const profile = new UserModel().findById(req.params.id);
});
authRouter.post('/:id/profile', (req: Request, res: Response) => {
  res.send({isAuth: true, user: req.user, cookie: req.session.cookie});
});
authRouter.post('/:id/deleteprofile', (req: Request, res: Response) => {
  res.send({isAuth: true, user: req.user, cookie: req.session.cookie});
});

authRouter.get('/failure', (req: Request, res: Response) => {
  console.log('failure!');
  res.send({logged: false});
});

export default authRouter;
