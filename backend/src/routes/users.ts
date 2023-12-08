const express = require('express');
import {Request, Response} from 'express';
import UserModel from '../models/UserModel';
const userRouter = express.Router();

userRouter.get('/getpending', async (req: Request, res: Response) => {
  const pendingUsers = await new UserModel().findByQuery({role: 'Pending'});
  res.send(pendingUsers);
});

export default userRouter;
