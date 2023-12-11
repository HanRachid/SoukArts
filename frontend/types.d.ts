import {ReactElement} from 'react';

export type RouteObj = {
  path: string;
  element: ReactElement;
};

export type User = {
  _id: Schema.Types.ObjectId;
  username: string;
  first_name: string;
  last_name: string;
  gender: Gender;
  profile_image: CloudinaryImage;
  email: string;
  phone: string;
  password: string;
  role: Object;
  country: string;
  is_active?: boolean;
  is_deleted?: boolean;
  card_info?: CardInfo;
  order_history?: OrderHistoryItem[];
  created_at?: Date;
  updated_at?: Date;
};

type CloudinaryImage = {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  tags: string[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  folder: string;
  access_mode: string;
  original_filename: string;
};

type Product = {
  user_id: string | undefined;
  title: string;
  description: string;
  category: string;
  price: number;
  quantity: number;
  images: FormData[];
};

type ProductUrl = {
  _id: string;
  user_id: string | undefined;
  title: string;
  description: string;
  seller_id: string;
  category: string;
  subcategory: string | undefined;
  item_type: string | undefined;
  shipping_time: string | undefined;
  free_shipping: boolean;
  price: number;
  quantity: number;
  style: string | undefined;
  primary_color: string | undefined;
  secondary_color: string | undefined;
  images: CloudinaryImage[];
  formData: FormData[];
};

type Link = {icon: ReactNode; path: string; title: string};

type Category = {
  name: string;
  Subcategories: string[];
};

type Seller = {
  _id: Schema.Types.ObjectId;
  user_id: Types.ObjectId;
  shop_name: string;
  banner: CloudinaryImage;
  business_email: string;
  cardNumber: string;
  cardHolder: string;
  expirationDate: string;
  cvc: number;
  language: string;
  status: string;
  description: string;
  address: string;
  slogan: string;
  annoucements: string;
  created_at: Date;
  updated_at: Date;
};
