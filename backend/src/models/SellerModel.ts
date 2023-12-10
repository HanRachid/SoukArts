import {Schema} from 'mongoose';
import BaseModel from './BaseModel';
import SellerInterface from './SellerInterface';

export default class SellerModel extends BaseModel<SellerInterface> {
  static schema = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'user', required: true},
    shop_name: {type: String, required: true},
    business_email: {type: String, required: true},
    cardHolder: {type: String, required: true},
    cardNumber: {type: String, required: true},
    banner: {type: Object, required: true},
    expirationDate: {type: String, required: true},
    cvc: {type: Number, required: true},
    language: {type: String, required: true},
    description: {type: String, required: false},
    status: {type: String, required: false},
    created_at: {type: Date, required: false},
    updated_at: {type: Date, required: false},
  });
  constructor() {
    super('Seller', SellerModel.schema);
  }
}
