import {Document, Schema, Types} from 'mongoose';

/**
 * An interface describing a UserModel.
 * @public
 */
export default interface UserInterface extends Document {
  _id: Schema.Types.ObjectId;
  username: string;
  first_name: string;
  last_name: string;
  gender: Gender;
  profile_image: Object;
  email: string;
  phone: string;
  country: string;
  password: string;
  role: Object;
  is_active?: boolean;
  is_deleted?: boolean;
  card_info?: CardInfo;
  seller_id?: Types.ObjectId;
  order_history?: OrderHistoryItem[];
  created_at?: Date;
  updated_at?: Date;
}
