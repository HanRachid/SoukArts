import {Types} from 'mongoose';

export default interface SellerInterface extends Document {
  _id: Types.ObjectId;
  user_id: Types.ObjectId;
  seller_id: Types.ObjectId;
  shop_name: string;
  business_email: string;
  cardNumber: string;
  cardHolder: string;
  expirationDate: string;
  cvc: number;
  language: string;
  status: string;
  description: string;
  created_at: Date;
  updated_at: Date;
}
