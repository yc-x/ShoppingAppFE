import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit{
  constructor(public productService: ProductService){}
  ngOnInit(): void {
    this.productService.getWatchList();
  }
}
