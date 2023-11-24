import {Types} from 'mongoose';

export default interface SellerInterface extends Document {
  _id: Types.ObjectId;
  user_id: Types.ObjectId;
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
  shop_policies: {
    returns_exchanges: {
      is_returnable: boolean;
      return_period: number;
    };
    cancellations: {
      is_cancellable: boolean;
      cancellation_period: number;
    };
    payment_methods: string[];
  };
}
