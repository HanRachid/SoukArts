import BaseModel from "./BaseModel";

/**
 * UserModel Class that describes the users .
 */
export default class UserModel implements BaseModel {
  id: number;
  first_name: string;
  last_name: string;
  /**
   *
   * @param id
   * @param first_name
   * @param last_name
   */
  constructor(id: number, first_name: string, last_name: string) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
  }
}
