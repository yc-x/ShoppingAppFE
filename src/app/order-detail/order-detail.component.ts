import { Component, Input, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../interfaces/order';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit{
  @Input() orderId!: number;
  displayedColumns: string[] = [];

  constructor(private route: ActivatedRoute, 
    public orderService: OrderService){}

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.orderId = params['id'];
      this.orderService.getOrderById(this.orderId);
    });
    if(this.isAdmin()){
      this.displayedColumns = ['name', 'quantity', 'purchasedPrice', 'wholesalePrice'];
    }
    else{
      this.displayedColumns = ['name', 'quantity', 'purchasedPrice'];
    }
  }

  isAdmin(){
    return localStorage.getItem('Permissions') == 'Admin';
  }

}
