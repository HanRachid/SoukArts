import {Schema} from 'mongoose';
import BaseModel from './BaseModel';

export default class CategoryModel extends BaseModel<CategoryInterface> {
  static schema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
  });

  constructor() {
    super('Category', CategoryModel.schema);
  }
}
