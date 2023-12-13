import OrderModel from '../models/OrderModel';

const express = require('express');

const orderRouter = express.Router();

orderRouter.post('/createorder', async (req, res) => {
  const {order, user_id} = req.body;
  const newOrder = await new OrderModel().create({
    order,
    user_id,
    created_at: new Date(),
    updated_at: new Date(),
  });
  res.send(newOrder);
});

export default orderRouter;
orderRouter.get('/getorders/:id', async (req, res) => {
  const {id} = req.params;
  const orders = await new OrderModel().findManyByQuery({
    user_id: id,
  });
  res.send(orders);
});
