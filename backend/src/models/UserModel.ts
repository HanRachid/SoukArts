import BaseModel from "./BaseModel";





class UserModel implements BaseModel {
	age: number;
	height: number;
	id: number;
	first_name: string;
	last_name: string;
}