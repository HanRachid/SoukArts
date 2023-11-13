const express = require('express');
import {Request, Response} from 'express';
import UserModel from '../models/UserModel';

const authRouter = express.Router();

authRouter.post('/register', (req: Request, res: Response) => {
  const modelUser = {...(req.body as UserModel)};

  console.log(new UserModel(modelUser));
});
export default authRouter;
