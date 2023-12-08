const express = require('express');
const sellerRouter = express.Router();

import {Request, Response} from 'express';

import SellerModel from '../models/SellerModel';
import UserModel from '../models/UserModel';

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
  console.log(req.body);

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
  await new UserModel().update(user_id, {role: 'Pending'});

  res.send(newSeller);
});

export default sellerRouter;
