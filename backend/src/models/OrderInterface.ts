import {Schema, Types} from 'mongoose';
import ProductInterface from './ProductInterface';

export default interface OrderInterface {
  _id: Types.ObjectId;
  user_id: Types.ObjectId;
  order: ProductInterface[];
  address_id: Types.ObjectId;
  status: string;
  payment_status: string;
  payment_method_id: Types.ObjectId;
  created_at: Date;
  updated_at: Date;
}
