import {connectToDB} from './config/db';
import usersRouter from './routes/users';
import authRouter from './routes/auth';
import productRouter from './routes/products';
import sellerRouter from './routes/seller';
import orderRouter from './routes/orders';
const express = require('express');
const cors = require('cors');

require('dotenv').config();
const app = express();
const port = process.env.PORT ?? 3000;
app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};

app.use(cors(corsOptions));
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/products', productRouter);
app.use('/seller', sellerRouter);
app.use('/orders/', orderRouter);
app.listen(3000, (): void => {
  console.log('server running on port ' + port);
  connectToDB();
});
