import {Schema} from 'mongoose';

export default interface FavoriteInterface extends Document {
  _id: Schema.Types.ObjectId;
  product_id: Schema.Types.ObjectId;
  user_id: Schema.Types.ObjectId;
  created_at: Date;
}
