import {Types} from 'mongoose';

export default interface FavoriteInterface extends Document {
  product_id: Types.ObjectId;
  user_id: Types.ObjectId;
  created_at: Date;
}
