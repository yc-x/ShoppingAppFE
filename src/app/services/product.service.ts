import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  data: Product[] = [
    {
      id: 1,
      name: "dummy1",
      description: "yummy yummy",
      retailPrice: 1.25,
      quantity: 90,
      wholesalePrice: 0.75,
    },
    {
      id: 2,
      name: "dummy2",
      description: "yummy yummy2",
      retailPrice: 2.25,
      quantity: 91,
      wholesalePrice: 1.75,
    },
    {
      id:3,
      name: "dummy3",
      description: "yummsfasdfsay yummy",
      retailPrice: 3.25,
      quantity: 10,
      wholesalePrice: 0.75,
    }
  ];

  add(p: Product){
    this.data.push(p);
  }

}
