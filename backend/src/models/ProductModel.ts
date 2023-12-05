import {Schema} from 'mongoose';
import BaseModel from './BaseModel';
import ProductInterface from './ProductInterface';
import {Types} from 'mongoose';

export default class ProductModel extends BaseModel<ProductInterface> {
  static schema = new Schema({
    user_id: {type: Types.ObjectId, required: true, ref: 'user'},
    category: {type: Array, required: true},
    subcategory: {type: Array, required: false},
    free_shipping: {type: Boolean, required: false},
    shipping_time: {type: Boolean, required: false},
    title: {type: String, required: true},
    description: {type: String, required: true},
    quantity: {type: Number, required: false},
    price: {type: Number, required: false},
    images: {type: Array, required: true},
    style: {type: String, required: false},
    filter: {
      color: {
        primary: {type: Array, required: false},
        secondary: {type: Array, required: false},
      },
      item_type: {type: Array, required: false},
      ordering_options: {type: Array, required: false},
    },
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
