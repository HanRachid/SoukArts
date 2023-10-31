/**
 * An interface describing a UserModel.
 * @public
 */
export default interface BaseModel {
  id: number;
  first_name: string;
  last_name: string;
  getSchema();
  /*dbRemove(id: number): Promise<void>;
  dbShow(id: number): Promise<any>;*/
}
