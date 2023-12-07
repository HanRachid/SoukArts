type Role = 'Client' | 'Seller' | 'Awaiting' | 'Admin';
type Gender = 'Male' | 'Female' | 'Other';
type CardInfo = {
  card_number: String;
  expiry_date: Date;
  cvv: number;
};
type WishlistItem = {
  itemName: String;
  itemPrice: Number;
  addedAt: Date;
  quantity: Number;
};

type OrderHistoryItem = {
  items: WishlistItem[];
  totalAmount: Number;
  orderDate: Date;
  deliveryDate?: Date;
  status: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled';
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
