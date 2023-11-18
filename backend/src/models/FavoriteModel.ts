import {Schema} from 'mongoose';
import BaseModel from './BaseModel';
import FavoriteInterface from './FavoriteInterface';

export default class FavoriteModel extends BaseModel<FavoriteInterface> {
  static schema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
  });

  constructor() {
    super('Favorite', FavoriteModel.schema);
  }
}
