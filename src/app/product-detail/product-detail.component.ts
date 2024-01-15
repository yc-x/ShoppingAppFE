import { Component, Input } from '@angular/core';
import { Product } from '../interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  // @Input() product!: Product;

  productId!: number;
  product!: Product;

  constructor(private route: ActivatedRoute,
    private productService: ProductService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      // You can use this.productId to fetch and display product details
      const productObj = this.productService.data.find(p => p.id == this.productId)!;
      //if(productObj){
      this.product = productObj;
      //}

    });
  }
}
