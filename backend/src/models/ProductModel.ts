import {Schema} from 'mongoose';
import BaseModel from './BaseModel';

export default class ProducModel extends BaseModel<ProductInterface> {
  static schema = new Schema({
    category_id: {type: Schema.Types.ObjectId, required: true},
    shipping_id: {type: Schema.Types.ObjectId, required: true},
    seller_id: {type: Schema.Types.ObjectId, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    stock: {type: Number, required: true},
    is_new: {type: Boolean, required: true},
    price: {type: Number, required: true},
    product_ratings: {type: Number, required: true},
    discount: {
      amount: {type: Number, required: true},
      valid_until: {type: Date, required: true},
    },
    created_at: {type: Date, required: true},
    updated_at: {type: Date, required: true},
  });

  constructor() {
    super('Product', ProducModel.schema);
  }
}
