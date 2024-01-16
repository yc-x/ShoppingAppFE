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
  // isUpdate: boolean = false;
  product: Product | null = null;

  constructor(private route: ActivatedRoute,
    public productService: ProductService) {}

  ngOnInit() {
    this.productService.getWatchList();
    this.route.params.subscribe(params => {
      // this.isUpdate = false;
      this.productId = params['id'];

    });

    this.productService.getProductById(this.productId).subscribe(
      (response: any) => {
        if(response.success && response.data){
          this.product = response.data;
        }
      }
    );
  }

  addToCart(p: Product){
    this.productService.addToCart(p);
  }
}
