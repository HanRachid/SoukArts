import {Schema} from 'mongoose';

export default interface OrderInterface {
  _id: Schema.Types.ObjectId;
  user_id: Schema.Types.ObjectId;
  address_id: Schema.Types.ObjectId;
  status: string;
  payment_status: string;
  payment_method_id: Schema.Types.ObjectId;
  created_at: Date;
  updated_at: Date;
}
