import {Schema} from 'mongoose';

export default interface CartInterface extends Document {
  _id: Schema.Types.ObjectId;
  user_id: Schema.Types.ObjectId;
  product_id: Schema.Types.ObjectId;
  quantity: number;
}
