const express = require('express');
import {Request, Response} from 'express';
import UserModel from '../models/UserModel';
const userRouter = express.Router();

userRouter.get('/getpending', async (req: Request, res: Response) => {
  const pendingUsers = await new UserModel().findByQuery({role: 'Pending'});
  res.send(pendingUsers);
});

userRouter.post('/edit/:id', async (req: Request, res: Response) => {
  const {id} = req.params;
  const {first_name, last_name, gender, profile_image, email, phone, country} =
    req.body;
  console.log(req.body);
  console.log(id);

  const user = await new UserModel().update(id, {
    first_name,
    last_name,
    gender,
    profile_image,
    email,
    phone,
    country,
  });
  res.send(user);
});

export default userRouter;
