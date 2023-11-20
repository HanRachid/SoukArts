import {Document, Schema} from 'mongoose';

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
  profile_image: string;
  email: string;
  phone: string;
  password: string;
  role_id?: Object;
  is_active?: boolean;
  is_deleted?: boolean;
  card_info?: CardInfo;
  order_history?: OrderHistoryItem[];
  created_at?: Date;
  updated_at?: Date;
}
