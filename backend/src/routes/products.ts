const express = require('express');
import {Request, Response} from 'express';
import ProductModel from '../models/ProductModel';
const productRouter = express.Router();

productRouter.post('/add', async (req: Request, res: Response) => {
  const {title, description} = req.body;
  const product = await new ProductModel().create({
    title: title,
    description: description,
  });
  res.send(product._id);
});

// get specific product
productRouter.get('/:id', (req: Request, res: Response) => {
  console.log(req.params.id);
});

export default productRouter;
