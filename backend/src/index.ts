import { NextFunction, Request, Response } from 'express';
import { connectDb } from './config/connectionDb';
import usersRouter from './routes/users';
import { authRouter, passport } from './routes/auth';
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT ?? 3000;
app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your frontend's URL
  credentials: true,
};

app.use(cors(corsOptions));


const session = require('express-session');

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    // secure: true, // Enable in production with HTTPS
  }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/user', usersRouter);
app.use('/auth', authRouter);


app.listen(3000, (): void => {
  console.log('server running on port ' + port);
  connectDb();
});
