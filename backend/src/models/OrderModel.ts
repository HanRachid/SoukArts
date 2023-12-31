import {Schema, Types} from 'mongoose';
import BaseModel from './BaseModel';
import OrderInterface from './OrderInterface';

export default class OrderModel extends BaseModel<OrderInterface> {
  static schema = new Schema({
    user_id: {type: Types.ObjectId, required: true, ref: 'user'},
    order: {type: Array, required: true},
    status: {type: String, required: false},
    payment_status: {type: String, required: false},
    payment_method_id: {type: Types.ObjectId, required: false},
    created_at: {type: Date, required: false},
    updated_at: {type: Date, required: false},
  });

  constructor() {
    super('order', OrderModel.schema);
  }
}
