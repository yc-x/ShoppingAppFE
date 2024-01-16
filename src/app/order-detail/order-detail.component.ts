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

  constructor(private route: ActivatedRoute, 
    public orderService: OrderService){}

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.orderId = params['id'];
      this.orderService.getOrderById(this.orderId);
    });
  }

  isAdmin(){
    return localStorage.getItem('Permissions') == 'Admin';
  }

}
