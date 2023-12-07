import {Schema} from 'mongoose';
import BaseModel from './BaseModel';
import ProductInterface from './ProductInterface';
import {Types} from 'mongoose';

export default class ProductModel extends BaseModel<ProductInterface> {
  static schema = new Schema({
    user_id: {type: Types.ObjectId, required: true, ref: 'user'},
    category: {type: String, required: true},
    subcategory: {type: String, required: true},
    free_shipping: {type: Boolean, required: true},
    shipping_time: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    quantity: {type: Number, required: true},
    price: {type: Number, required: true},
    images: {type: Array, required: true},
    style: {type: String, required: true},
    primary_color: {type: String, required: true},
    secondary_color: {type: String, required: true},
    item_type: {type: String, required: true},

    product_ratings: {type: Number, required: false},
    discount: {
      on_sale: {type: Boolean, required: false},
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
