import OrderModel from '../models/OrderModel';

const express = require('express');

const orderRouter = express.Router();

orderRouter.post('/createorder', async (req, res) => {
  const {order, user_id} = req.body;
  const newOrder = await new OrderModel().create({order, user_id});
  res.send(newOrder);
});

export default orderRouter;
