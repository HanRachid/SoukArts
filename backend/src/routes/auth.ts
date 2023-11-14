const express = require('express');
import {Request, Response, response} from 'express';
import UserModel from '../models/UserModel';

const authRouter = express.Router();

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

authRouter.post('/login', async (req: Request, res: Response) => {
  const {username, password} = req.body;
  const login = await UserModel.findModelpw(username, password);

  res.send(login);
});

export default authRouter;
