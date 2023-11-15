import {connectDb} from './config/connectionDb';
import usersRouter from './routes/users';
import authRouter from './routes/auth';
const express = require('express');
const cors = require('cors');

require('dotenv').config();
const app = express();
const port = process.env.PORT ?? 3000;
app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:5174',
  credentials: true,
};

app.use(cors(corsOptions));

app.use('/user', usersRouter);
app.use('/auth', authRouter);

app.listen(3000, (): void => {
  console.log('server running on port ' + port);
  connectDb();
});
