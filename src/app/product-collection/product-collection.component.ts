import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-collection',
  templateUrl: './product-collection.component.html',
  styleUrls: ['./product-collection.component.css']
})
export class ProductCollectionComponent implements OnInit, OnDestroy {
  constructor(public productService: ProductService){}
  // products: Product[] = [];
  displayedColumns: string[] = ['productCol'];
  ngOnInit(){
    this.productService.getAllProducts();
    this.productService.getWatchList();
  }
  

  ngOnDestroy(): void {}
}
