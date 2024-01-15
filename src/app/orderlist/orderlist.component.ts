import { Component, OnDestroy, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Subscription } from 'rxjs';
import { Order } from '../interfaces/order';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit, OnDestroy{
  private orderSubscription!: Subscription;
  orderList: Order[] = [];
  constructor(private orderService: OrderService){
  }
  
  ngOnInit(): void {
      this.orderSubscription = this.orderService.orderList$.subscribe(
        (newOrderList) => {
          this.orderList = newOrderList;
        }
      );
      this.orderService.fetchOrders();
  }

  ngOnDestroy(): void {
      this.orderSubscription.unsubscribe();
  }
}
