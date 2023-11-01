import BaseModel from './BaseModel';
import mongoose, {mongo} from 'mongoose';

/**
 * UserModel Class that describes the users .
 */
export default class UserModel implements BaseModel {
  static mongoModel: mongoose.Model<BaseModel> = null;
  _id: number;
  first_name: string;
  last_name: string;
  gender: Gender;
  role: Role;
  is_deleted: boolean;
  /**
   *
   * @param id
   * @param first_name
   * @param last_name
   * @param gender
   * @param is_deleted
   */
  constructor(
    first_name: string,
    last_name: string,
    gender: Gender,
    role: Role,
    id?: number,
    Model?: mongoose.Model<BaseModel>
  ) {
    UserModel.mongoModel =
      UserModel.mongoModel ??
      mongoose.model<BaseModel>('User', UserModel.getSchema());
    this._id = id ?? null;
    this.first_name = first_name;
    this.last_name = last_name;
    this.role = role;
    this.gender = gender;
    this.is_deleted = false;
  }
  /**
   * Getter for schema
   * @returns Our model's Schema
   */
  static getSchema(): mongoose.Schema {
    return new mongoose.Schema({
      first_name: {type: String, required: true},
      last_name: {type: String, required: true},
      gender: {type: String, required: true},
      is_deleted: {type: Boolean, required: true},
      role: {type: String, required: true},
    });
  }
  /**
   * Save model into db
   */
  async saveModel(): Promise<void> {
    if (this._id !== null) {
      console.log('this user already exists!');
    }
    const item = {
      first_name: this.first_name,
      last_name: this.last_name,
      gender: this.gender,
      is_deleted: this.is_deleted,
      role: this.role,
    };
    const createModel = await UserModel.mongoModel.create(item);
    this._id = createModel.get('_id');
  }

  /**
   * Find current model from db
   * @returns current model in db
   */
  async getModel(): Promise<BaseModel> {
    const findModel = await UserModel.mongoModel.findOne({_id: this._id});

    return findModel;
  }

  /**
   * Update the current model in db
   * @param object Object with edits
   */
  async updateModel(object: Partial<UserModel>): Promise<void> {
    await UserModel.mongoModel.updateOne({_id: this._id}, object);
  }
  /**
   * Set current model's is_deleted to true
   */
  async deleteModel(): Promise<void> {
    const deleteModel = await UserModel.mongoModel.updateOne(
      {_id: this._id},
      {is_deleted: true}
    );
    console.log(deleteModel);
  }

  /**
   * Set current model's is_deleted to false
   */
  async restoreModel(): Promise<void> {
    const restoreModel = await UserModel.mongoModel.updateOne(
      {_id: this._id},
      {is_deleted: false}
    );
  }
  /**
   * @static
   * get every user from db
   */
  static async getAll(): Promise<mongoose.Document[]> {
    const Model = mongoose.model<BaseModel>('User', this.getSchema());
    const allModels = await Model.find();
    return allModels;
  }

  /**
   * Get
   * @param id model's id
   * @returns UserModel's object
   */
  static async useModel(id: string): Promise<UserModel> {
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
  }
}
