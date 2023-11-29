const express = require('express');
import {Request, Response} from 'express';
import ProductModel from '../models/ProductModel';
const productRouter = express.Router();
import {v2 as cloudinary} from 'cloudinary';
import UserModel from '../models/UserModel';

cloudinary.config({
  cloud_name: 'dmgfba0uv',
  api_key: '257986118332165',
  api_secret: '9NNuLMHEpzj_K-yZRbZ8opmat0E',
});
productRouter.post('/addproduct', async (req: Request, res: Response) => {
  const {category, title, description, images, price, quantity, user_id} =
    req.body;
  console.log(req.body);

  const checkExists = await new ProductModel().findByQuery({title: title});
  if (checkExists) {
    res.status(409).send({error: 'exists'});
    return;
  }
  const product = await new ProductModel().create({
    user_id: user_id,
    title: title,
    description: description,
    category: category,
    images: images,
    price: price,
    quantity: quantity,
  });
  console.log(product);

  res.send(product._id);
});

// get specific product
productRouter.get('/:id', async (req: Request, res: Response) => {
  const products = await new ProductModel().findOneToMany(
    req.params.id,
    'user',
    UserModel.schema
  );
  console.log(products);

  res.send(products);
});

productRouter.post('/deleteproduct', async (req: Request, res: Response) => {
  try {
    const images = await new ProductModel().findById(req.body.id);
    console.log(images);
    res.send(images);

    /* const deleteProduct = await new ProductModel().deleteDefinitive(
      req.body.id
    );*/
  } catch (error) {
    res.status(400).send(error);
  }
});

productRouter.post('/editproduct', (req: Request, res: Response) => {
  console.log(req.params.id);
});

export default productRouter;
