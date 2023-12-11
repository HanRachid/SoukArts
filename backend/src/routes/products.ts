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
  const {
    category,
    title,
    description,
    images,
    price,
    quantity,
    user_id,
    primary_color,
    secondary_color,
    shipping_time,
    subcategory,
    style,
    item_type,
    free_shipping,
    seller_id,
  } = req.body;

  const editProduct = await new ProductModel().findByQuery({title: title});
  if (editProduct) {
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
    primary_color: primary_color,
    secondary_color: secondary_color,
    shipping_time: shipping_time,
    subcategory: subcategory,
    style: style,
    item_type: item_type,
    free_shipping: free_shipping,
    seller_id: seller_id,
  });
  console.log(product);

  res.send(product._id);
});

// get specific product
productRouter.get('/product/:id', async (req: Request, res: Response) => {
  const products = await new ProductModel().findOneToMany(
    req.params.id,
    'user',
    UserModel.schema
  );

  res.send(products);
});

productRouter.get('/allproducts', async (req: Request, res: Response) => {
  const allProducts = await new ProductModel().getAllModelsPopulateTwice(
    'user',
    UserModel.schema,
    'seller',
    UserModel.schema
  );

  res.send(allProducts);
});

productRouter.post(
  '/deleteproduct/:id',
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const product = await new ProductModel().findById(id);
    const deletedProduct = await new ProductModel().deleteDefinitive(id);
    if (deletedProduct) {
      for (let image of product.images) {
        await cloudinary.uploader.destroy(image.public_id);
      }
      res.send(deletedProduct);
    }
  }
);

productRouter.post('/editproduct/:id', async (req: Request, res: Response) => {
  const {category, title, description, images, price, quantity, user_id} =
    req.body;

  const id = req.params.id;
  const product = await new ProductModel().findById(id);
  if (product) {
    const editProduct = await new ProductModel().update(id, {
      user_id: user_id,
      title: title,
      description: description,
      category: category,
      images: images,
      price: price,
      quantity: quantity,
    });

    const removedImages = product.images.filter((image) => {
      return editProduct.images.includes(image);
    });

    for (let image of removedImages) {
      await cloudinary.uploader.destroy(image.public_id);
    }
    res.send(editProduct);
    return;
  }

  res.send({error: 'couldnt find product'});
});

export default productRouter;
