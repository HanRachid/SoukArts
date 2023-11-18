import {Document} from 'mongodb';
import mongoose, {Model, Query, Schema} from 'mongoose';

export default class BaseModel<T extends Document> {
  private model: Model<T>;

  constructor(modelName: string, schema: Schema<T>) {
    this.model = mongoose.model<T>(modelName, schema);
  }

  async create(data: Partial<T>): Promise<T> {
    return this.model.create(data);
  }

  async findById(id: string): Promise<T | null> {
    return this.model.findById(id).exec();
  }

  async update(id: string, data: Partial<T>): Promise<T | null> {
    return this.model.findByIdAndUpdate(id, data, {new: true}).exec();
  }

  async deleteDefinitive(id: string): Promise<void> {
    await this.model.findByIdAndDelete(id).exec();
  }
  /**
   * Set current model's is_deleted to true
   */
  async deleteModel(id: string): Promise<T | null> {
    return this.model
      .findByIdAndUpdate(id, {is_deleted: true}, {new: true})
      .exec();
  }

  /**
   * Set current model's is_deleted to false
   */
  async restoreModel(id: string): Promise<T | null> {
    return this.model
      .findByIdAndUpdate(id, {is_deleted: false}, {new: true})
      .exec();
  }
  /**
   * get all users
   * @returns array containing all user's objects
   */
  async getAllModels(): Promise<T[]> {
    return this.model.find({}).exec();
  }
  async findByQuery(query: Record<string, any>): Promise<T | null> {
    return this.model.findOne(query).exec();
  }
  async getSchema(SchemaFields: Partial<T>) {
    new Schema<T>(SchemaFields);
  }
}
