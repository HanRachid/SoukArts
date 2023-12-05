import {Types} from 'mongoose';

export default interface ReviewInterface {
  _id: Types.ObjectId;
  user_id: Types.ObjectId;
  product_id: Types.ObjectId;
  rating: number;
  comment: string;
  created_at?: Date;
  updated_at?: Date;
}
