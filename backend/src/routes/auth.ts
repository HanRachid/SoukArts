const express = require('express');
import { Request, Response, response } from 'express';
import UserModel from '../models/UserModel';
import passport from '../middlewares/authpassport';



const authRouter = express.Router();

authRouter.post('/register', async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const user = new UserModel(username, email, password);
  const checkExists = await UserModel.findModelpw(username, password);

  if (checkExists) {
    console.log('Cannot register user, already exists');
    res.send({ error: 'nah' });
    return;
  }
  const register = await user.registerModel();
  res.send(register);
});

// authRouter.post('/login', async (req: Request, res: Response) => {
//   const { username, password } = req.body;
//   const login = await UserModel.findModelpw(username, password);

//   res.send(login);
// });

// authRouter.post('/login', authenticate('local'), async (req: Request, res: Response) => {
//   //const user = req.user;
//   res.send({ success: true, user: "sss" });
// });



authRouter.post('/login', passport.authenticate('local', {
  successRedirect: '/auth/success',
  failureRedirect: '/auth/failure',
  failureFlash: false
}));


authRouter.get('/success', (req, res) => {
  console.log(req);

  res.send({ isLogged: true })
}

);
authRouter.get('/failure', (req, res) => { res.send({ isLogged: false }) }

);

authRouter.get('/profile', (req, res) => {

  if (req.isAuthenticated()) {
    res.send(req.user); // Send user data as a response
  } else {
    res.status(401).send('Not authenticated'); // Handle unauthenticated access
  }
});


export { authRouter, passport };
