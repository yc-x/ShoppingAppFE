import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-collection',
  templateUrl: './product-collection.component.html',
  styleUrls: ['./product-collection.component.css']
})
export class ProductCollectionComponent implements OnInit, OnDestroy {
  products!: Product[];
  constructor(public productService: ProductService){}

  ngOnInit(){
    this.products = this.productService.data;
  }
  

  ngOnDestroy(): void {}
}
