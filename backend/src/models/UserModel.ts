import BaseModel from './BaseModel';
import mongoose from 'mongoose';

/**
 * UserModel Class that describes the users .
 */
export default class UserModel implements BaseModel {
  Model: mongoose.Model<BaseModel>;
  _id: number;
  first_name: string;
  last_name: string;
  gender: Gender;
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
    id?: number
  ) {
    this.Model = mongoose.model<BaseModel>('User', UserModel.getSchema());
    this._id = id ?? null;
    this.first_name = first_name;
    this.last_name = last_name;
    this.gender = gender;
    this.is_deleted = false;
  }
  static getSchema(): mongoose.Schema {
    return new mongoose.Schema({
      first_name: {type: String, required: true},
      last_name: {type: String, required: true},
      gender: {type: String, required: true},
      is_deleted: {type: Boolean, required: true},
    });
  }
  async saveModel(): Promise<void> {
    const item = {
      first_name: this.first_name,
      last_name: this.last_name,
      gender: this.gender,
      is_deleted: this.is_deleted,
    };
    const createModel = await this.Model.create(item);
    this._id = createModel.get('_id');
  }

  async getModel(): Promise<BaseModel> {
    const findModel = await this.Model.findOne({_id: this._id});
    console.log(findModel);

    return findModel;
  }
  async updateModel(object: Partial<UserModel>): Promise<void> {
    await this.Model.updateOne({_id: this._id}, object);
  }
  async deleteModel(): Promise<void> {
    const deleteModel = await this.Model.updateOne(
      {_id: this._id},
      {is_deleted: true}
    );
    console.log(deleteModel);
  }
  async restoreModel(): Promise<void> {
    const restoreModel = await this.Model.updateOne(
      {_id: this._id},
      {is_deleted: false}
    );
  }
  static async getAll(): Promise<void> {
    const Model = mongoose.model<BaseModel>('User', this.getSchema());
    const allModels = await Model.find();
    console.log(allModels);
  }

  static async findModel(id: string): Promise<void> {
    const Model = mongoose.model<BaseModel>('User', this.getSchema());
    const foundModel: UserModel = await Model.findOne({_id: id});
  }
}
