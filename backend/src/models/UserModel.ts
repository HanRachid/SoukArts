import BaseModel from "./BaseModel";
import mongoose from "mongoose";

/**
 * UserModel Class that describes the users .
 */
export default class UserModel implements BaseModel {
  private static MongoUser = mongoose.models.User || mongoose.model<BaseModel>("User", UserModel.getSchema());
  _id: Object;
  username: string;
  first_name: string;
  last_name: string;
  gender: string;
  profile_image: string;
  email: string;
  number_phone: string;
  hashed_password: string;
  role_id: Roles;
  is_active: boolean;
  is_deleted: boolean;
  card_info: CardInfo;
  order_history: [OrderHistoryItem];
  created_at: Date;
  updated_at: Date;

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
   * @param order_history of Order IDs for Order History
   * @param created_at Account Creation
   * @param updated_at Last Update Timestamp
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
  ) {

    this._id = this._id ?? null;
    this.first_name = first_name;
    this.last_name = last_name;
    this.gender = gender;
    this.is_deleted = false;
    this.username = username;
    this.first_name = first_name;
    this.last_name = last_name;
    this.gender = gender,
      this.profile_image = profile_image;
    this.email = email;
    this.number_phone = number_phone;
    this.hashed_password = hashed_password,
      this.role_id = "client",
      this.is_active = true,
      this.is_deleted = false,
      this.card_info = {
        card_number: "",
        expiry_date: null,
        cvv: 0,
      },
      this.order_history = [{
        items: [{
          itemName: "",
          itemPrice: 0,
          addedAt: null,
          quantity: 0
        }],
        totalAmount: 0,
        orderDate: null,
        deliveryDate: null,
        status: null
      }],
      this.created_at = new Date();
    this.updated_at = new Date()
  }
  CleanUsers(Condition: object): Promise<void> {
    throw new Error("Method not implemented.");
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
      role_id: { type: Object, required: false },
      is_active: { type: Boolean, required: false },
      is_deleted: { type: Boolean, required: false },
      card_info: {
        type: {
          card_number: { type: String, required: false },
          expiry_date: { type: Date, required: false },
          cvv: { type: Number, required: false },
        },
        required: false
      },
      wishlist: { type: [Object], required: false },
      order_history: { type: [Object], required: false },
      created_at: { type: Date, required: false },
      updated_at: { type: Date, required: false },
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
      order_history: this.order_history,
      created_at: this.created_at,
      updated_at: this.updated_at,
    };
    const createModel = await UserModel.MongoUser.create(item);
    this._id = createModel.get("_id");
  }

  async getModel(): Promise<BaseModel> {
    const findModel = await UserModel.MongoUser.findOne({ _id: this._id });
    console.log(findModel);

    return findModel;
  }
  async updateModel(object: Partial<UserModel>): Promise<void> {
    await UserModel.MongoUser.updateOne({ _id: this._id }, object);
  }
  async deleteModel(): Promise<void> {
    const deleteModel = await UserModel.MongoUser.updateOne(
      { _id: this._id },
      { is_deleted: true }
    );
    console.log(deleteModel);
  }
  async restoreModel(): Promise<void> {
    const restoreModel = await UserModel.MongoUser.updateOne(
      { _id: this._id },
      { is_deleted: false }
    );
  }
  static async getAllUsers(): Promise<any[]> {
    const allUsers = await UserModel.MongoUser.find();
    return allUsers
  }

  static async findModel(id: string): Promise<UserModel> {
    const Model = mongoose.model<BaseModel>("User", this.getSchema());
    const foundModel: UserModel = await Model.findOne({ _id: id });
    return foundModel;
  }

  static async CleanUsers(Condition: object): Promise<void> {
    console.log("Deleting users with condition:", Condition);

    const result = await UserModel.MongoUser.deleteMany(Condition);
    console.log(result);

    if (result.deletedCount === 0) {
      console.log("No documents matched the condition.");
    } else {
      console.log(result.deletedCount + " documents were deleted.");
    }
  }

}
