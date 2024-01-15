import { Component, Input } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product-brief',
  templateUrl: './product-brief.component.html',
  styleUrls: ['./product-brief.component.css']
})
export class ProductBriefComponent {
  @Input() product!: Product;
}
