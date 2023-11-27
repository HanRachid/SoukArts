import {Schema} from 'mongoose';
import BaseModel from './BaseModel';
import SellerInterface from './SellerInterface';

export default class SellerModel extends BaseModel<SellerInterface> {
  static schema = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'user', required: true},
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
    shop_policies: {
      returns_exchanges: {
        is_returnable: {type: Boolean, required: true},
        return_period: {type: Number, required: true},
      },
      cancellations: {
        is_cancellable: {type: Boolean, required: true},
        cancellation_period: {type: Number, required: true},
      },
      payment_methods: {type: Array, required: true},
    },
  });
  constructor() {
    super('Seller', SellerModel.schema);
  }
}
