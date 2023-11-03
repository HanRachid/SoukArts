import {NextFunction, Request, Response, request} from 'express';
import UserModel from '../models/UserModel';
const bcrypt = require('bcrypt');
require('dotenv').config();

const registerUser = async (req: Request, res: Response) => {
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
  let hashed: string;
  bcrypt.hash(
    hashed_password,
    process.env.saltRounds,
    function (err: Error, hash: string) {
      if (err) throw err;

      hashed = hash;
    }
  );
  try {
    const newUser = new UserModel(
      username,
      first_name,
      last_name,
      gender,
      profile_image,
      email,
      number_phone,
      hashed
    );
    await newUser.registerModel();
    res.status(201).json({message: 'User registered successfully'});
  } catch (error) {
    console.error(error.message);
    res.status(500).json({message: 'An error occurred during registration'});
  }
};

const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await UserModel.getAllUsers();

    if (users && users.length > 0) {
      res.status(200).json({message: 'All users', data: users});
    } else {
      res.status(404).json({message: 'No users found'});
    }
  } catch (error) {
    console.error('Error fetching users:', error.message);
    res.status(500).json({message: 'Internal Server Error'});
  }
};

const cleanUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const Condition = req.body;

    await UserModel.cleanUsers(Condition);
    res.status(201).json({message: 'Clean Users with success'});
  } catch (error) {
    console.error('Error fetching users:', error.message);
    res.status(500).json({message: 'Internal Server Error'});
  }
};

export {registerUser, getUsers, cleanUsers};
