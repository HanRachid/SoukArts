import {Schema} from 'mongoose';
import BaseModel from './BaseModel';

export default class ProductModel extends BaseModel<ProductInterface> {
  static schema = new Schema({
    category_id: {type: Schema.Types.ObjectId, required: false},
    shipping_id: {type: Schema.Types.ObjectId, required: false},
    seller_id: {type: Schema.Types.ObjectId, required: false},
    title: {type: String, required: true},
    description: {type: String, required: false},
    stock: {type: Number, required: false},
    is_new: {type: Boolean, required: false},
    price: {type: Number, required: false},
    product_ratings: {type: Number, required: false},
    discount: {
      amount: {type: Number, required: false},
      valid_until: {type: Date, required: false},
    },
    created_at: {type: Date, required: false},
    updated_at: {type: Date, required: false},
  });

  constructor() {
    super('product', ProductModel.schema);
  }
}
