import { Injectable } from '@angular/core';
import { Order } from '../interfaces/order';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders: Order[] = [];
  oneOrder: Order = {
    id: 0,
    datePlaced: '',
    orderItemDetails: [],
    status: ''
  }; 

  private orderListSubject: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>([]);
  public orderList$: Observable<Order[]> = this.orderListSubject.asObservable();
  
  constructor(private http: HttpClient, 
    private productService: ProductService) { }

  placeOrder(){
    const orderList = this.productService.cart.map(item => ({
      productId: item.id,
      quantity: item.quantity
    }));
    const requestData = {
      order: orderList
    };
    this.http.post('/api/content/orders', requestData).subscribe(
      (response: any) => {
        if(response.success){
          this.productService.clearCart();
        }
        alert(response.message);
      }
    );
  }

  fetchOrders(): void {
    //TODO: replace with real fetch.
    // this.http.get<any[]>(this.apiUrl).pipe(
    //   map(response => response.success && response.data ? this.mapToOrderList(response.data) : [])
    // )
    this.http.get('/api/content/orders/all').subscribe(
      (response: any) => {
        if(response.success && response.data){
          this.orders = this.mapToOrderList(response.data);
        } 
      }
    );
  }

  getOrderById(id: number): void{
    this.http.get(`/api/content/orders/${id}`).subscribe(
      (response: any) => {
        if(response.success && response.data){
          this.oneOrder = response.data;
        } 
      }
    );
  }

  cancelOrderById(id: number): void{
    this.http.patch(`/api/content/orders/${id}/cancel`, null).subscribe(
      (response: any) => {
        if(!response.success){
          alert(response.message);
        } 
      }
    );
  }

  completeOrderById(id: number): void{
    this.http.patch(`/api/content/orders/${id}/complete`, null).subscribe(
      (response: any) => {
        if(!response.success){
          alert(response.message);
        } 
      }
    );
  }

  private mapToOrderList(data: any[]): Order[] {
    return data.map(item => ({
      id: item.orderId,
      datePlaced: item.datePlaced,
      orderItemDetails: item.orderItemDetails,
      status: item.status,
    }));
  }

  // add(p: Order){
  //   this.orders.push(p);
  // }

}
