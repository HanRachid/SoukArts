import {Types} from 'mongoose';

/**
 * An interface describing a UserModel.
 * @public
 */
export default interface ProductInterface {
  _id: Types.ObjectId;
  user_id: Types.ObjectId;
  seller_id: Types.ObjectId;
  category: string;
  subcategory: string;
  free_shipping: boolean;
  shipping_time: boolean;
  title: string;
  description: string;
  quantity: number;
  price: number;
  style: string;
  images: CloudinaryImage[];
  primary_color: string;
  secondary_color: string;
  item_type: string[];
  ordering_options: string[];
  product_ratings?: number;
  discount: {
    on_sale: boolean;
    amount?: number;
    valid_until?: Date;
  };
  created_at?: Date;
  updated_at?: Date;
}
