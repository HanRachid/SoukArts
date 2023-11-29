import BaseModel from './BaseModel';
import ReviewInterface from './ReviewInterface';

export default class ReviewModel extends BaseModel<ReviewInterface> {
  static schema = null;
  constructor() {
    super('review', ReviewModel.schema);
  }
}
