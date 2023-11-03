import UserModel from './UserModel';

/**
 * An interface describing a UserModel.
 * @public
 */
export default interface BaseModel {
  _id: Object;
  username: string;
  first_name: string;
  last_name: string;
  gender: Gender;
  profile_image: string;
  email: string;
  number_phone: string;
  hashed_password: string;
  role_id?: Object;
  is_active?: boolean;
  is_deleted?: boolean;
  card_info?: CardInfo;
  order_history?: OrderHistoryItem[];
  created_at?: Date;
  updated_at?: Date;
  registerModel(): Promise<Object>;
  getModel(): Promise<BaseModel>;
  updateModel(object: Partial<UserModel>): Promise<void>;
  deleteModel(): Promise<void>;
}
