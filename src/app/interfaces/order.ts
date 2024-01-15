export interface Order {
    orderId: number;
    datePlaced: string;
    orderItemDetails: OrderItem[];
    status: string;
  }
  
export interface OrderItem {
    purchasedPrice: number;
    quantity: number;
    wholesalePrice: number;
    productName: string;
}
