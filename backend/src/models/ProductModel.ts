import {Schema} from 'mongoose';
import BaseModel from './BaseModel';
import ProductInterface from './ProductInterface';

export default class ProductModel extends BaseModel<ProductInterface> {
  static schema = new Schema({
    seller_id: {type: Schema.Types.ObjectId, required: false},
    category: {type: Array, required: true},
    subcategory: {type: Array, required: true},
    free_shipping: {type: Boolean, required: true},
    shipping_time: {type: Boolean, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    quantity: {type: Number, required: false},
    price: {type: Number, required: false},
    style: {type: String, required: true},
    filter: {
      color: {
        primary: {type: Array, required: true},
        secondary: {type: Array, required: true},
      },
      item_type: {type: Array, required: true},
      ordering_options: {type: Array, required: true},
    },
    product_ratings: {type: Number, required: false},
    discount: {
      on_sale: {type: Boolean, required: true},
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
