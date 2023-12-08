import BaseModel from './BaseModel';
import SellerModel from './SellerModel';
import UserInterface from './UserInterface';
import {Schema, Types} from 'mongoose';

/**
 * UserModel Class that describes the users .
 */
export default class UserModel extends BaseModel<UserInterface> {
  static schema = new Schema({
    username: {type: String, required: true},
    first_name: {type: String, required: false},
    last_name: {type: String, required: false},
    gender: {type: String, required: false},
    profile_image: {type: String, required: false},
    email: {type: String, required: true},
    number_phone: {type: String, required: false},
    password: {type: String, required: true},
    role: {type: String, required: true},
    seller: {type: Types.ObjectId, required: false, ref: 'seller'},
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

  constructor() {
    super('user', UserModel.schema);
  }
}
