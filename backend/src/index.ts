import {NextFunction, Request, Response} from 'express';
import {ConnectDb} from './config/connectionDb';
const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT ?? 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Worlde');
});

app.listen(3000, (): void => {
  console.log('server running on port ' + port);
  ConnectDb();
});
