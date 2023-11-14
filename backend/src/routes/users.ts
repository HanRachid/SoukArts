const express = require('express');
import {Request, Response} from 'express';
const userRouter = express.Router();

userRouter.get('/test', (req: Request, res: Response) => {
  res.send('test user!');
});

export default userRouter;
