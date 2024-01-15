import { Injectable } from '@angular/core';
import { Order } from '../interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  data: Order[] = [
    {
      orderId: 1,
      datePlaced: "2024-01-08T12:30:00.000+00:00",
      orderItemDetails: [
        {
          purchasedPrice: 9.99,
          quantity: 5,
          wholesalePrice: 5.0,
          productName: "Premium Coffee Beans",
        },
        {
          purchasedPrice: 15.5,
          quantity: 3,
          wholesalePrice: 10.0,
          productName: "French Press",
        },
      ],
      status: "Processing",
    },
    {
      orderId: 2,
      datePlaced: "2024-01-09T10:45:00.000+00:00",
      orderItemDetails: [
        {
          purchasedPrice: 22.99,
          quantity: 2,
          wholesalePrice: 18.0,
          productName: "Wireless Bluetooth Earbuds",
        },
        {
          purchasedPrice: 30.0,
          quantity: 1,
          wholesalePrice: 25.0,
          productName: "Portable Power Bank",
        },
      ],
      status: "Completed",
    },
    {
      orderId: 3,
      datePlaced: "2024-01-10T15:20:00.000+00:00",
      orderItemDetails: [
        {
          purchasedPrice: 14.99,
          quantity: 4,
          wholesalePrice: 10.0,
          productName: "Organic Green Tea",
        },
        {
          purchasedPrice: 8.0,
          quantity: 8,
          wholesalePrice: 5.0,
          productName: "Ceramic Teapot",
        },
      ],
      status: "Canceled",
    },
  ];

  
  constructor() { }

  add(p: Order){
    this.data.push(p);
  }
}
