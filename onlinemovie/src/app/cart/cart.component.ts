import { LogService } from './.././log.service';
import { Cart } from './.././model/cart';
import { CartService } from './.././cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products: Cart[] = [];
  public sortedCart: Cart[] = [];
  public grandTotal: number = 0;

  constructor(
    private cartService: CartService,
    private router: Router,
    private logService: LogService
  ) {
    this.sortedCart = this.products.slice();
  }

  ngOnInit(): void {
    this.logService.sendHeader(1);
    this.logService.loggeduserId$.subscribe((id) => {
      if (id === '') {
        this.router.navigate(['']);
      }
    });
    this.getCartItemList();
  }

  sortData(sort: Sort) {
    const data = this.products.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedCart = data;
      return;
    }
    this.sortedCart = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
        case 'category':
        case 'price':
          return this.compare(a.product[sort.active], b.product[sort.active], isAsc);
        case 'quantity':
          return this.compare(a.quantity, b.quantity, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  private getCartItemList() {
    this.cartService.getCartItemList().subscribe((res: Cart[]) => {
      this.products = res;
      this.grandTotal = 0;
      for (let i = 0; i < this.products.length; i++) {
        this.grandTotal += this.products[i].price;
      }
      sessionStorage.setItem('grandTotal', '' + this.grandTotal);
      this.sortedCart = this.products;
    });
  }

  deleteItem(id: any) {
    this.cartService.deleteItem(id).subscribe((res) => {
      this.getCartItemList();
    });
  }

  removeAllCart() {
    this.cartService.deleteAllCart().subscribe((res) => {
      this.getCartItemList();
    });
  }

  addOneCart(id: any, cart: Cart) {
    this.cartService.addOneCart(id, cart).subscribe((res) => {
      this.getCartItemList();
    });
  }

  lessOneCart(id: any, cart: Cart) {
    this.cartService.lessOneCart(id, cart).subscribe((res) => {
      this.getCartItemList();
    });
  }
}
