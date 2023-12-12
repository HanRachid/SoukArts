const express = require('express');
const sellerRouter = express.Router();

import {Request, Response} from 'express';

import SellerModel from '../models/SellerModel';
import UserModel from '../models/UserModel';
import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
  cloud_name: 'dmgfba0uv',
  api_key: '257986118332165',
  api_secret: '9NNuLMHEpzj_K-yZRbZ8opmat0E',
});

sellerRouter.get('/seller/:id', async (req: Request, res: Response) => {
  const seller = await new SellerModel().findById(req.params.id);
  res.send(seller);
});

sellerRouter.post('/addseller', async (req: Request, res: Response) => {
  const {
    business_email,
    user_id,
    shop_name,
    cardNumber,
    cardHolder,
    cvc,
    language,
    expirationDate,
  } = req.body;
  const checkExists = await new SellerModel().findByQuery({user_id: user_id});
  if (checkExists) {
    res.send('Seller already exists');
    return;
  }
  const newSeller = await new SellerModel().create({
    business_email: business_email,
    user_id: user_id,
    shop_name: shop_name,
    cvc: cvc,
    cardHolder: cardHolder,
    cardNumber: cardNumber,
    expirationDate: expirationDate,
    language: language,
    status: 'pending',
  });
  const updatedUser = await new UserModel().update(user_id, {
    role: 'Pending',
    seller_id: newSeller._id,
  });

  res.send(newSeller);
});

sellerRouter.get('/getPendingSeller', async (req: Request, res: Response) => {
  const sellers = await new SellerModel().getAllModelsPopulate(
    'user',
    UserModel.schema
  );
  res.send(sellers);
});

sellerRouter.post('/approve/:id', async (req: Request, res: Response) => {
  const seller = await new SellerModel().update(req.params.id, {
    status: 'approved',
  });
  const user = await new UserModel().update(seller.user_id.toString(), {
    role: 'Seller',
  });

  res.send(seller);
});

sellerRouter.post('/deny/:id', async (req: Request, res: Response) => {
  const seller = await new SellerModel().update(req.params.id, {
    status: 'denied',
  });
  const user = await new UserModel().update(seller.user_id.toString(), {
    role: 'User',
  });

  res.send(seller);
});

async function destroyImage(id: string) {
  const url = 'http://api.cloudinary.com/v1_1/dmgfba0uv/image/destroy';
  const params: RequestInit = {
    method: 'POST',
    body: id,
  };
  const destroy = await fetch(url, params);
  const result = await destroy.json();

  return result;
}

sellerRouter.post('/edit/:id', async (req: Request, res: Response) => {
  const {id} = req.params;
  const {
    shop_name,
    business_email,
    address,
    slogan,
    annoucements,
    banner,
    description,
    language,
    destroy_id,
  } = req.body;
  if (destroy_id) {
    await cloudinary.uploader.destroy(destroy_id);
  }

  const user = await new SellerModel().update(id, {
    shop_name,
    business_email,
    banner,
    description,
    address,
    slogan,
    annoucements,
    language,
  });
  res.send(user);
});

export default sellerRouter;
