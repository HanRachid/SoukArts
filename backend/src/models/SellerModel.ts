import {Schema} from 'mongoose';
import BaseModel from './BaseModel';
import SellerInterface from './SellerInterface';

export default class SellerModel extends BaseModel<SellerInterface> {
  static schema = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'Users', required: true},
    shop_name: {type: String, required: true},
    business_email: {type: String, required: true},
    bank_account: {
      account_number: {type: String, required: true},
      routing_number: {type: String, required: true},
    },
    language: {type: String, required: true},
    status: {type: String, required: true},
    created_at: {type: Date, required: true},
    updated_at: {type: Date, required: true},
  });

  constructor() {
    super('Seller', SellerModel.schema);
  }
}
