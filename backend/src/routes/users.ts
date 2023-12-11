const express = require('express');
import {Request, Response} from 'express';
import UserModel from '../models/UserModel';
import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
  cloud_name: 'dmgfba0uv',
  api_key: '257986118332165',
  api_secret: '9NNuLMHEpzj_K-yZRbZ8opmat0E',
});
const userRouter = express.Router();

userRouter.get('/getpending', async (req: Request, res: Response) => {
  const pendingUsers = await new UserModel().findByQuery({role: 'Pending'});
  res.send(pendingUsers);
});

userRouter.post('/edit/:id', async (req: Request, res: Response) => {
  const {id} = req.params;
  const {
    first_name,
    last_name,
    gender,
    profile_image,
    email,
    phone,
    country,
    destroy_id,
  } = req.body;
  if (destroy_id) {
    await cloudinary.uploader.destroy(destroy_id);
  }
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
