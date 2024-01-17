import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Product } from '../interfaces/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-collection',
  templateUrl: './product-collection.component.html',
  styleUrls: ['./product-collection.component.css']
})
export class ProductCollectionComponent implements OnInit, OnDestroy {
  constructor(public productService: ProductService, 
    private router: Router){}
  // products: Product[] = [];
  displayedColumns: string[] = ['productCol'];
  isDisplay: boolean = false;
  ngOnInit(){
    this.productService.getAllProducts();
    this.productService.getWatchList();
    // this.productService.getTotalProductsSold();
  }
  
  isAdmin(): boolean{
    return localStorage.getItem('Permissions') == 'Admin';
  }

  ngOnDestroy(): void {}

  redirectToAddProduct(){
    this.router.navigate(['/products/add']);
  }
  getTotalProductsSold(){
    this.productService.getTotalProductsSold();
    this.isDisplay = true;
    // console.log(this.productService.adminTotalProductsSold);
  }

  
}
