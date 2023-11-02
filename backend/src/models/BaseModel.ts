import UserModel from './UserModel';

/**
 * An interface describing a UserModel.
 * @public
 */
export default interface BaseModel {
    _id: Object,
    username: string,
    first_name: string,
    last_name: string,
    gender: string,
    profile_image: string,
    email: string,
    number_phone: string,
    hashed_password: string,
    role_id?: Object,
    is_active?: boolean,
    is_deleted?:boolean,
    card_info?: CardInfo,
    wishlist?: [Object],
    order_history?: [Object],
    created_at?: Date,
    updated_at?: Date
  RegisterUser(): Promise<void>;
  getModel(): Promise<BaseModel>;
  updateModel(object: Partial<UserModel>): Promise<void>;
  deleteModel(): Promise<void>;
}
