export interface Order {
    id: number;
    datePlaced: string;
    orderItemDetails: OrderItem[];
    status: string;
  }
  
export interface OrderItem {
    purchasedPrice: number;
    quantity: number;
    wholesalePrice: number;
    productName: string;
    productId: number;
}
