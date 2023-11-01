import UserModel from './UserModel';

/**
 * An interface describing a UserModel.
 * @public
 */
export default interface BaseModel {
  _id: number;
  first_name: string;
  last_name: string;
  gender: Gender;
  is_deleted: boolean;
  role: Role;
  saveModel(): Promise<void>;
  getModel(): Promise<BaseModel>;
  updateModel(object: Partial<UserModel>): Promise<void>;
  deleteModel(): Promise<void>;
}
