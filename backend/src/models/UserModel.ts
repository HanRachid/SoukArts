import BaseModel from "./BaseModel";
import mongoose from "mongoose";

/**
 * UserModel Class that describes the users .
 */
export default class UserModel implements BaseModel {
  Model: mongoose.Model<BaseModel>;
  _id: Object;
  username: string;
  first_name: string;
  last_name: string;
  gender: string;
  profile_image: string;
  email: string;
  number_phone: string;
  hashed_password: string;
  role_id?: Object;
  is_active?: boolean;
  is_deleted?: boolean;
  card_info?: CardInfo;
  wishlist?: [Object];
  order_history?: [Object];
  created_at?: Date;
  updated_at?: Date;
  /**
   *
   * @param username Unique Username, Indexed
   * @param first_name First Name
   * @param last_name Last Name
   * @param gender Gender
   * @param profile_image Profile Image URL
   * @param email Email, Indexed & Unique
   * @param number_phone Phone Number
   * @param hashed_password Hashed Password
   * @param role_id Foreign Key to Roles Collection
   * @param is_active Account Status
   * @param is_deleted Deletion status
   * @param card_info Nested JSON for Card Info
   * @param wishlist Array of Product IDs for Wishlist
   * @param order_history of Order IDs for Order History
   * @param created_at // Account Creation
   * @param updated_at // Last Update Timestamp
   */
  constructor(
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
    is_deleted?: boolean,
    card_info?: CardInfo,
    wishlist?: [Object],
    order_history?: [Object],
    created_at?: Date,
    updated_at?: Date,
    _id?: Object
  ) {
    this.Model = mongoose.model<BaseModel>("User", UserModel.getSchema());
    this._id = this._id ?? null;
    this.first_name = first_name;
    this.last_name = last_name;
    this.gender = gender;
    this.is_deleted = false;
    this.username= username;
    this.first_name= first_name;
    this.last_name= last_name;
    this.gender= gender,
    this.profile_image= profile_image;
    this.email= email;
    this.number_phone= number_phone;
    this.hashed_password= hashed_password,
    this.role_id= role_id,
    this.is_active = is_active,
    this.is_deleted = is_deleted,
    this.card_info= card_info,
    this.wishlist= wishlist;
    this.order_history= order_history,
    this.created_at= created_at;
    this.updated_at= updated_at
  }
  saveModel(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  static getSchema(): mongoose.Schema {
    return new mongoose.Schema({
      username: { type: String, required: true },
      first_name: { type: String, required: true },
      last_name: { type: String, required: true },
      gender: { type: String, required: true },
      profile_image: { type: String, required: true },
      email: { type: String, required: true },
      number_phone: { type: String, required: true },
      hashed_password: { type: String, required: true },
      role_id: { type: Object, required: true },
      is_active: { type: Boolean, required: true },
      is_deleted: { type: Boolean, required: true },
      card_info: {
        type: {
          card_number: { type: String, required: true },
          expiry_date: { type: Date, required: true },
          cvv: { type: Number, required: true },
        },
        required: true
      },
      wishlist: { type: [Object], required: true },
      order_history: { type: [Object], required: true },
      created_at: { type: Date, required: true },
      updated_at: { type: Date, required: true },
    });
  }
  async RegisterUser(): Promise<void> {
    const item = {
      username: this.username,
      first_name: this.first_name,
      last_name: this.last_name,
      gender: this.gender,
      profile_image: this.profile_image,
      email: this.email,
      number_phone: this.number_phone,
      hashed_password: this.hashed_password,
      role_id: this.role_id,
      is_active: this.is_active,
      is_deleted: this.is_deleted,
      card_info: this.card_info,
      wishlist: this.wishlist,
      order_history: this.order_history,
      created_at: this.created_at,
      updated_at: this.updated_at,
    };
    const createModel = await this.Model.create(item);
    this._id = createModel.get("_id");
  }


  async getModel(): Promise<BaseModel> {
    const findModel = await this.Model.findOne({ _id: this._id });
    console.log(findModel);

    return findModel;
  }
  async updateModel(object: Partial<UserModel>): Promise<void> {
    await this.Model.updateOne({ _id: this._id }, object);
  }
  async deleteModel(): Promise<void> {
    const deleteModel = await this.Model.updateOne(
      { _id: this._id },
      { is_deleted: true }
    );
    console.log(deleteModel);
  }
  async restoreModel(): Promise<void> {
    const restoreModel = await this.Model.updateOne(
      { _id: this._id },
      { is_deleted: false }
    );
  }
  static async getAll(): Promise<void> {
    const Model = mongoose.model<BaseModel>("User", this.getSchema());
    const allModels = await Model.find();
    console.log(allModels);
  }

  static async findModel(id: string): Promise<UserModel> {
    const Model = mongoose.model<BaseModel>("User", this.getSchema());
    const foundModel: UserModel = await Model.findOne({ _id: id });
    return foundModel;
  }
}
