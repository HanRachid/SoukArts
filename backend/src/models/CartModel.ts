import {Schema} from 'mongoose';
import BaseModel from './BaseModel';
import CartInterface from './CartInterface';

export default class CartModel extends BaseModel<CartInterface> {
  static schema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
  });

  constructor() {
    super('Cart', CartModel.schema);
  }
}
