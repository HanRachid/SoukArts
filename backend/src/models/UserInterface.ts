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
  phone: string;
  password: string;
  role_id?: Object;
  is_active?: boolean;
  is_deleted?: boolean;
  card_info?: CardInfo;
  order_history?: OrderHistoryItem[];
  created_at?: Date;
  updated_at?: Date;
  registerModel(): Promise<Object>;
  getModel(): Promise<BaseModel>;
  updateModel(object: Partial<BaseModel>): Promise<void>;
  deleteModel(): Promise<void>;
}