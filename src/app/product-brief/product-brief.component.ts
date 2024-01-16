import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-brief',
  templateUrl: './product-brief.component.html',
  styleUrls: ['./product-brief.component.css']
})
export class ProductBriefComponent implements OnInit{
  @Input() product!: Product;
  @Input() isInCart!: boolean;
  @Input() isInWatchlist!: boolean;
  watchlistSubscription!: Subscription;

  constructor(public productService: ProductService){};
  ngOnInit(): void{
    this.watchlistSubscription = this.productService.getWatchlistObservable().subscribe(
      (newItem) =>{
        this.isInWatchlist = this.productService
        .isInWatchlist(this.product);
      }
    );
  }

  isAdmin(): boolean{
    return localStorage.getItem('Permissions') == 'Admin';
  }

  addToCart(p: Product){
    this.productService.addToCart(p);
  }
  removeFromCart(p: Product){
    this.productService.removeFromCart(p);
  }

  addToWatchlistById(id: number){
    this.productService.addToWatchlistById(id);
    this.isInWatchlist = !this.isInWatchlist;
  }
  
  removeFromWatchlistById(id: number){
    this.productService.removeFromWatchlistById(id);
    this.isInWatchlist = !this.isInWatchlist;
  }

  ngOnDestroy(){
    this.watchlistSubscription.unsubscribe();
  }
}

