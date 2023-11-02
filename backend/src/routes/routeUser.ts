import { NextFunction, Request, Response, request } from "express";
import UserModel from '../models/UserModel';

const userRegister = async (req:Request, res:Response) => {
  try {
    const {
      username,
      first_name,
      last_name,
      gender,
      profile_image,
      email,
      number_phone,
      hashed_password,
    } = req.body;

    console.log(req.body.username);
    

    const newUser = new UserModel(
      username,
      first_name,
      last_name,
      gender,
      profile_image,
      email,
      number_phone,
      hashed_password,
    );

    await newUser.RegisterUser();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'An error occurred during registration' },);
  }
};

export { userRegister };
