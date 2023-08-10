import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '././model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemList: Cart[] = [];
  public productList = new BehaviorSubject<Cart[]>([]);
  private baseURL = "http://localhost:8084/carts";

  constructor(private httpClient: HttpClient) { }

  addToCart(cart: Cart): Observable<any> {
    return this.httpClient.post(`${this.baseURL}`, cart);
  }

  getProduct(): Observable<Cart[]> {
    return this.productList.asObservable();
  }

  getCartItemList(): Observable<Cart[]> {
    return this.httpClient.get<Cart[]>(`${this.baseURL}`);
  }

  deleteItem(id: any): Observable<Cart> {
    return this.httpClient.delete<Cart>(`${this.baseURL}/${id}`);
  }

  deleteAllCart(): Observable<Object> {
    return this.httpClient.delete<Cart[]>(`${this.baseURL}`);
  }

  lessOneCart(id: any, cart: Cart): Observable<Object> {
    return this.httpClient.put<Cart>(`${this.baseURL}/minus/${id}`, cart);
  }

  addOneCart(id: any, cart: Cart): Observable<Object> {
    return this.httpClient.put<Cart>(`${this.baseURL}/add/${id}`, cart);
  }
}
