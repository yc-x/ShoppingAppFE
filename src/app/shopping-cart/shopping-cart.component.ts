import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  constructor(public productService: ProductService,
    private orderService: OrderService){}
  
  ngOnInit(){
    this.productService.getWatchList();
  }

  placeOrder(){
    this.orderService.placeOrder();
  }
}
