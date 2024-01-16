import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  products: Product[] = [];
  oneProduct!: Product;
  cart: Product[] = [];
  watchlist: Product[] = [];
  userFrequentProducts: Product[] = [];
  userRecentProducts: Product[] = [];
  adminFrequentProducts: Product[] = [];
  profitableProducts: Product[] = [];


  watchlistSubject: BehaviorSubject<Product[]> = 
    new BehaviorSubject<Product[]>(this.watchlist);

  getWatchlistObservable(): Observable<Product[]>{
    return this.watchlistSubject.asObservable();
  }

  addToCart(p: Product){
    const findItemById = (idToFind: number): any | undefined => {
      return this.cart.find(item => item.id === idToFind);
    };
    const foundItem = findItemById(p.id);
    if(foundItem){
      foundItem.quantity += 1;
    }
    else{
      const newP: Product = {
        id: p.id,
        name: p.name,
        description: p.description,
        wholesalePrice: p.wholesalePrice,
        quantity: 1,
        retailPrice: p.retailPrice
      };
      this.cart.push(newP);
    }
  }

  clearCart(){
    this.cart = [];
  }

  isInWatchlist(p: Product): boolean{
    const idToFind = p.id;
    const findItemById = (idToFind: number): any | undefined => {
      return this.watchlist.find(item => item.id === idToFind);
    };
    const foundItem = findItemById(p.id);
    return foundItem;
  }

  removeFromCart(p: Product){
    const idToRemove = p.id; // Replace with the id you want to remove
    this.cart = this.cart.filter(item => item.id !== idToRemove);
  }

  getAllProducts(){
    this.http.get('/api/content/products/all').subscribe(
      (response: any) => {
        if(response.success && response.data){
          this.products = response.data;
        }
      }
    );
  }

  getWatchList(){
    this.http.get('/api/content/watchlist/products/all').subscribe(
      (response: any) => {
        if(response.success && response.data){
          this.watchlist = response.data;
        }
        else{
          alert(response.message);
        }
      }
    );
  }

  addToWatchlistById(id: number){
    this.http.post(`/api/content/watchlist/product/${id}`, null).subscribe(
      (response: any) =>{
        if(!response.success){
          alert(response.message);
        }
        this.getWatchList();
      }
    );
  }

  removeFromWatchlistById(id: number){
    this.http.delete(`/api/content/watchlist/product/${id}`).subscribe(
      (response: any) => {
        if(!response.success){
          alert(response.message);
        }
        this.getWatchList();
      }
    );
  }


  getProductById(id: number): Observable<Product>{
    return this.http.get<Product>(`/api/content/products/${id}`);
  }

  getTopRecentProduct(): void{
    this.http.get(`/api/content/products/recent/3`)
    .subscribe(
      (response: any)=>{
        if(response.success && response.data){
          this.userRecentProducts = response.data
          this.userFrequentProducts = [];
        }
      }
      
    );
  }

  getUserTopFrequentProduct(): void{
    this.http.get(`/api/content/products/frequent/3`)
    .subscribe(
      (response: any)=>{
        if(response.success && response.data){
          this.userFrequentProducts = response.data;
          this.userRecentProducts = [];
        }
      }
    );
  }

  getAdminTopFrequentProduct(){
    this.http.get(`/api/content/products/popular/3`).subscribe(
      (response: any) => {
        if(response.success && response.data){
          this.adminFrequentProducts = response.data;
          this.profitableProducts = [];
        }
      }
    );
  }

  getTopProfitProduct(){
    this.http.get(`/api/content/products/profit/3`).subscribe(
      (response: any) => {
        if(response.success && response.data){
          this.profitableProducts = response.data;
          this.adminFrequentProducts = [];
        }
      }
    );
  }

}
