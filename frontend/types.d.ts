import {ReactElement} from 'react';

export type RouteObj = {
  path: string;
  element: ReactElement;
};

export type User = {
  username: string;
  email?: string;
  password: string;
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
type DashboardLink = {icon: ReactNode; path: string; title: string};
type Category = {
  name: string;
  Subcategories: string[];
};

type Seller = {
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
};
