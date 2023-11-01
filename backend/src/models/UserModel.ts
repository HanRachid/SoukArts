import BaseModel from './BaseModel';
import {connectDb} from '../config/connectionDb';
import mongoose, {Document, Schema, disconnect} from 'mongoose';
import {UUID} from 'mongodb';

/**
 * UserModel Class that describes the users .
 */
export default class UserModel implements BaseModel {
  id: number;
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
    id: number,
    first_name: string,
    last_name: string,
    gender: Gender
  ) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.gender = gender;
    this.is_deleted = false;
  }
  getSchema() {
    return new mongoose.Schema({
      id: {type: Number, required: true},
      first_name: {type: String, required: true},
      last_name: {type: String, required: true},
      gender: {type: String, required: true},
      is_deleted: {type: Boolean, required: true},
    });
  }
  async saveModel() {
    const Model = mongoose.model('User', this.getSchema());
    const item = {
      id: this.id,
      first_name: this.first_name,
      last_name: this.last_name,
      gender: this.gender,
      is_deleted: this.is_deleted,
    };
    await Model.create(item);
  }

  async getModel() {
    const Model = mongoose.model('User', this.getSchema());
    const findModel = await Model.find({id: this.id});
    console.log(findModel);
  }
  async updateModel(object: Object) {
    const Model = mongoose.model('User', this.getSchema());
    const updateModel = await Model.updateOne({id: this.id}, {object});
  }
  async deleteModel() {
    const Model = mongoose.model('User', this.getSchema());
    const deleteModel = await Model.updateOne(
      {id: this.id},
      {is_deleted: true}
    );
    console.log(deleteModel);
  }
  async restoreModel() {
    const Model = mongoose.model('User', this.getSchema());
    const restoreModel = await Model.updateOne(
      {id: this.id},
      {is_deleted: false}
    );
  }
}
