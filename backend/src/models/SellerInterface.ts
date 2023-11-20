import {Schema} from 'mongoose';

export default interface SellerInterface extends Document {
  _id: Schema.Types.ObjectId;
  user_id: Schema.Types.ObjectId;
  shop_name: string;
  business_email: string;
  bank_account: {
    account_number: string;
    routing_number: string;
  };
  language: string;
  status: string;
  created_at: Date;
  updated_at: Date;
}
