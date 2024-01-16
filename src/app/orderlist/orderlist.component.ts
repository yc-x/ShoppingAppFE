import { Component, OnDestroy, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Subscription } from 'rxjs';
import { Order } from '../interfaces/order';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit, OnDestroy{
  // private orderSubscription!: Subscription;
  // orderList: Order[] = [];
  displayedColumns: string[] = ['Index', 'DatePlaced', 'Status', 'Details', 'Action']; 
  constructor(public orderService: OrderService,
    public productService: ProductService,
    private router: Router, 
    private activatedRoute: ActivatedRoute){}
  
  ngOnInit(): void {
      this.orderService.fetchOrders();
      this.productService.getWatchList();
  }
  cancelOrder(id: number){
    this.orderService.cancelOrderById(id);
    // alert('order canceled!');
    location.reload();
  }

  completeOrder(id: number){
    this.orderService.completeOrderById(id);
    // alert('order completed!');
    location.reload();
  }
  

  ngOnDestroy(): void {}

  getTopRecentProduct(){
    this.productService.getTopRecentProduct();
  }

  getUserTopFrequentProduct(){
    this.productService.getUserTopFrequentProduct();
  }

  getAdminTopFrequentProduct(){
    this.productService.getAdminTopFrequentProduct();
  }

  getTopProfitProduct(){
    this.productService.getTopProfitProduct();
  }

  isAdmin(): boolean{
    return localStorage.getItem('Permissions') == 'Admin';
  }
  
}
