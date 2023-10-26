import BaseModel from "./BaseModel";

export default class UserModel implements BaseModel {
  id: number;
  first_name: string;
  last_name: string;

  constructor(id: number, first_name: string, last_name: string) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
  }
}
