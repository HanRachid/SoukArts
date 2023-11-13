import {NextFunction, Request, Response} from 'express';
import {connectDb} from './config/connectionDb';
import UserModel from './models/UserModel';
import {getUsers, cleanUsers, registerUser} from './routes/UserRoutes';

const express = require('express');

require('dotenv').config();
const app = express();
const port = process.env.PORT ?? 3000;
app.use(express.json());

app.get('/', async (req: Request, res: Response) => {
  const foundUser = await UserModel.findModel('6544d76bf102534833e13cf8');
  console.log(foundUser);
  res.send(foundUser);
});

app.post('/register', registerUser);
app.get('/allUsers', getUsers);
app.post('/cleanUsers', cleanUsers);

app.listen(3000, (): void => {
  console.log('server running on port ' + port);
  connectDb();
});
