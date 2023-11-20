import {Schema, Types} from 'mongoose';
import BaseModel from './BaseModel';
import FavoriteInterface from './FavoriteInterface';

export default class FavoriteModel extends BaseModel<FavoriteInterface> {
  static schema = new Schema({
    product_id: {type: Types.ObjectId, required: true, ref: 'product'},
    user_id: {type: Types.ObjectId, required: true, ref: 'user'},
    created_at: {type: Date, required: false},
  });

  constructor() {
    super('Favorite', FavoriteModel.schema);
  }
}
