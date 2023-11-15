import {NextFunction, Request, Response} from 'express';
import {connectDb} from './config/connectionDb';
import usersRouter from './routes/users';
import authRouter from './routes/auth';
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT ?? 3000;
app.use(express.json());
app.use(cors());

app.use('/user', usersRouter);
app.use('/auth', authRouter);
app.get('/', async (req: Request, res: Response) => {
  res.send('Hello World!');
});
app.listen(3000, (): void => {
  console.log('server running on port ' + port);
  connectDb();
});
