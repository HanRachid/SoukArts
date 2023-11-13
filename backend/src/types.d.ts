type Role = 'Client' | 'Seller' | 'Admin';
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
