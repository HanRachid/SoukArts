const express = require('express');
import {Request, Response} from 'express';
import UserModel from '../models/UserModel';
import passport from '../middlewares/authpassport';
const authRouter = express.Router();
const session = require('express-session');
authRouter.post('/register', async (req: Request, res: Response) => {
  const {username, email, password} = req.body;
  const user = new UserModel(username, email, password);
  const checkExists = await UserModel.findModelpw(username, password);

  if (checkExists) {
    console.log('Cannot register user, already exists');
    res.send({error: 'nah'});
    return;
  }
  const register = await user.registerModel();
  res.send(register);
});

authRouter.use(
  session({secret: 'cats', resave: false, saveUninitialized: true})
);

authRouter.use(passport.initialize());
authRouter.use(passport.session());
authRouter.use(express.urlencoded({extended: false}));

authRouter.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/auth/success',
    failureRedirect: '/auth/failure',
  })
);
authRouter.get('/success', (req, res) => {
  console.log('success!');

  res.send({user: req.user});
});

authRouter.get('/failure', (req, res) => {
  console.log('failure!');
  res.send({logged: false});
});
authRouter.get('/profile', (req, res) => {
  if (req.isAuthenticated()) {
    res.send(req.user); // Send user data as a response
  } else {
    res.status(401).send('Not authenticated'); // Handle unauthenticated access
  }
});

export default authRouter;
