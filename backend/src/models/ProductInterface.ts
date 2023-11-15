/**
 * An interface describing a UserModel.
 * @public
 */
interface ProductInterface {
  _id: Object; // Primary Key
  category_id: Object; // Foreign Key to Categories Collection
  shipping_id: Object; // Foreign Key to Shipping Collection
  seller_id: Object; // Foreign Key to Sellers Collection
  title: string; // Product Title
  description: string; // Product Description
  stock: number; // Stock Quantity
  is_new: boolean; // Is the Product New?
  price: number; // Product Price
  product_ratings: number; // Average Product Rating
  discount: {
    // Nested JSON for Discounts
    amount: number; // Discount Amount
    valid_until: Date; // Discount Validity
  };
  created_at: Date; // Product Creation Timestamp
  updated_at: Date; // Last Update Timestamp
}
