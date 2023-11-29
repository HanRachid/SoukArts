const express = require('express');
import {Request, Response} from 'express';
import ProductModel from '../models/ProductModel';
const productRouter = express.Router();

productRouter.post('/addproduct', async (req: Request, res: Response) => {
  const {category, title, description, photos, price, quantity} = req.body;
  console.log(req.body);

  const checkExists = await new ProductModel().findByQuery({title: title});
  if (checkExists) {
    res.status(409).send({error: 'exists'});
    return;
  }
  const product = await new ProductModel().create({
    title: title,
    description: description,
    category: category,
    photos: photos,
    price: price,
    quantity: quantity,
  });
  res.send(product._id);
});

// get specific product
productRouter.get('/:id', (req: Request, res: Response) => {
  console.log(req.params.id);
});

productRouter.post('/deleteproduct', async (req: Request, res: Response) => {
  try {
    const images = await new ProductModel().findById(req.body.id);
    const deleteProduct = await new ProductModel().deleteDefinitive(
      req.body.id
    );

    res.send(deleteProduct);
  } catch (error) {
    res.status(400).send(error);
  }
});

productRouter.post('/editproduct', (req: Request, res: Response) => {
  console.log(req.params.id);
});

export default productRouter;
