import {Schema} from 'mongoose';
import BaseModel from './BaseModel';
import OrderInterface from './OrderInterface';

export default class OrderModel extends BaseModel<OrderInterface> {
  static schema = new Schema({
    user_id: {type: Schema.Types.ObjectId, required: true},
    address_id: {type: Schema.Types.ObjectId, required: true},
    status: {type: String, required: true},
    payment_status: {type: String, required: true},
    payment_method_id: {type: Schema.Types.ObjectId, required: true},
    created_at: {type: Date, required: true},
    updated_at: {type: Date, required: true},
  });

  constructor() {
    super('Order', OrderModel.schema);
  }
}
