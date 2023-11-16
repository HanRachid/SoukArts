import UserInterface from './UserInterface';
import mongoose from 'mongoose';

/**
 * UserModel Class that describes the users .
 */
export default class UserModel implements UserInterface {
  private static MongoUserModel = null;
  _id: Object;
  username: string;
  first_name: string;
  last_name: string;
  gender: Gender | null;
  profile_image: string;
  email: string;
  phone: string;
  password: string;
  role: Role;
  is_active: boolean;
  is_deleted: boolean;
  card_info: CardInfo;
  order_history: OrderHistoryItem[];
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
    email: string,
    password: string,
    first_name: string = '',
    last_name: string = '',
    gender: Gender | null = null,
    profile_image: string = '',
    phone: string = '',
    role: Role = 'Client'
  ) {
    this._id = this._id ?? null;
    this.first_name = first_name;
    this.last_name = last_name;
    this.gender = gender;
    this.is_deleted = false;
    this.username = username;
    this.first_name = first_name;
    this.last_name = last_name;
    this.gender = gender;
    this.profile_image = profile_image;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.role = role;
    this.is_active = true;
    this.is_deleted = false;

    this.created_at = new Date();
    this.updated_at = new Date();
  }
  /**
   * Gets current user's mongoDB model. If null, initiates it
   * @returns user's current mongodb model
   */
  static getMongoUserModel() {
    UserModel.MongoUserModel =
      UserModel.MongoUserModel ??
      mongoose.model<UserInterface>('User', UserModel.getSchema());
    return UserModel.MongoUserModel;
  }

  /**
   * creates and returns the user's mongoose schema
   * @returns User mongoose schema
   */
  static getSchema(): mongoose.Schema {
    return new mongoose.Schema({
      username: {type: String, required: true},
      first_name: {type: String, required: false},
      last_name: {type: String, required: false},
      gender: {type: String, required: false},
      profile_image: {type: String, required: false},
      email: {type: String, required: true},
      number_phone: {type: String, required: false},
      password: {type: String, required: true},
      role_id: {type: Object, required: false},
      is_active: {type: Boolean, required: false},
      is_deleted: {type: Boolean, required: false},
      saved_card: {
        type: {
          card_number: {type: String, required: false},
          expiry_date: {type: Date, required: false},
          cvv: {type: Number, required: false},
        },
        required: false,
      },
      wishlist: {type: [Object], required: false},
      order_history: {type: [Object], required: false},
      created_at: {type: Date, required: false},
      updated_at: {type: Date, required: false},
    });
  }

  /**
   * Register current user object in DB.
   * @returns if created, the user's unique ID
   */
  async registerModel(): Promise<Object | null> {
    if (this._id !== null) {
      console.log('user already exists!');
      return;
    }
    const item = {
      username: this.username,
      first_name: this.first_name,
      last_name: this.last_name,
      gender: this.gender,
      profile_image: this.profile_image,
      email: this.email,
      number_phone: this.phone,
      password: this.password,
      role: this.role,
      is_active: this.is_active,
      is_deleted: this.is_deleted,
      card_info: this.card_info,
      order_history: this.order_history,
      created_at: this.created_at,
      updated_at: this.updated_at,
    };

    const createModel = await UserModel.getMongoUserModel().create(item);
    this._id = createModel.get('_id');
    return this._id;
  }

  /**
   * Find current model from db
   * @returns current model in db
   */
  async getModel(): Promise<UserInterface> {
    console.log(this._id);

    const findModel = await UserModel.getMongoUserModel().findOne({
      _id: this._id,
    });

    return findModel;
  }

  /**
   * Update the current model in db
   * @param object Object with edits
   */
  async updateModel(object: Partial<UserModel>): Promise<void> {
    await UserModel.getMongoUserModel().updateOne(
      {_id: this._id, updated_at: new Date()},
      object
    );
  }
  /**
   * Set current model's is_deleted to true
   */
  async deleteModel(): Promise<void> {
    const deleteModel = await UserModel.getMongoUserModel().updateOne(
      {_id: this._id},
      {is_deleted: true}
    );
    console.log(deleteModel);
  }

  /**
   * Set current model's is_deleted to false
   */
  async restoreModel(): Promise<void> {
    await UserModel.getMongoUserModel().updateOne(
      {_id: this._id},
      {is_deleted: false}
    );
  }
  /**
   * get all users
   * @returns array containing all user's objects
   */
  static async getAllUsers(): Promise<UserModel[]> {
    const allUsers = await UserModel.getMongoUserModel().find();
    return allUsers;
  }

  /**
   * find model in db using id
   * @param id
   * @returns found model
   */
  static async findModel(id: string): Promise<UserModel> {
    const foundModel = await UserModel.getMongoUserModel().findOne({
      _id: id,
    });

    const result = await foundModel;

    return result;
  }

  /**
   * find model in db using email/password combination
   * @param id
   * @returns found model
   */
  static async findModelpw(usermail: string): Promise<UserModel> {
    const foundModel = await UserModel.getMongoUserModel().findOne({
      $or: [{username: usermail}, {email: usermail}],
    });

    return foundModel;
  }

  /**
   * find model in db using username/email combination
   * @param id
   * @returns found model
   */
  static async findModelUserEmail(
    username: string,
    email: string
  ): Promise<UserModel> {
    const foundModel = await UserModel.getMongoUserModel().findOne({
      $or: [{username: username}, {email: email}],
    });

    return foundModel;
  }

  /**
   * **DANGEROUS - WIPES ENTIRE DATABASE COLLECTION**
   * for development usage only, wipes entire database
   * @param Condition
   */
  static async cleanUsers(Condition: object): Promise<void> {
    console.log('Deleting users with condition:', Condition);

    const result = await UserModel.getMongoUserModel().deleteMany(Condition);
    console.log(result);

    if (result.deletedCount === 0) {
      console.log('No documents matched the condition.');
    } else {
      console.log(result.deletedCount + ' documents were deleted.');
    }
  }

  /*static async useModel(id: string): Promise<UserModel> {
    const Model = mongoose.model<UserModel>('User', this.getSchema());

    const foundModel = await Model.findOne({_id: id});

    const user = new UserModel(
      foundModel.first_name,
      foundModel.last_name,
      foundModel.gender,
      foundModel.role,
      foundModel._id,
      Model
    );
    console.log(user);

    return user;
  }*/
}
