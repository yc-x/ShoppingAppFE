import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy{
  // @Input() product!: Product;

  productId!: number;
  // isUpdate: boolean = false;
  product: Product | null = null;
  isInWatchlist: boolean = false;
  // private watchlistSubscription!: Subscription;


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
          if(this.product !== null){
            this.isInWatchlist = this.productService
            .isInWatchlist(this.product);
          }
        }
      }
    );

    // this.watchlistSubscription = this.productService
    //   .getWatchlistObservable()
    //   .subscribe(
    //     (newData: Product[]) => {
    //       console.log(newData);
    //       if(this.product !== null){
    //         const hasId: boolean = this.productService.isInWatchlist(this.product as Product);
    //         this.isInWatchlist = hasId;
    //       }
    //     }
    //   );
  }

  addToCart(p: Product){
    this.productService.addToCart(p);
  }
  
  addToWatchlist(p: Product){
    this.productService.addToWatchlistById(p.id);
    this.isInWatchlist = true;
  }

  removeFromWatchlist(p: Product){
    this.productService.removeFromWatchlistById(p.id);
    this.isInWatchlist = false;
  }

  isAdmin(): boolean{
    return localStorage.getItem('Permissions') == 'Admin';
  }

  ngOnDestroy(): void {
      //this.watchlistSubscription.unsubscribe();
  }
  
}
