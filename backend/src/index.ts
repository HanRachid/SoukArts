import {NextFunction, Request, Response} from 'express';
import {connectDb} from './config/connectionDb';
import UserModel from './models/UserModel';
import mongoose from 'mongoose';
const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT ?? 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Worlde');
});

app.listen(3000, (): void => {
  console.log('server running on port ' + port);
  connectDb();
});
