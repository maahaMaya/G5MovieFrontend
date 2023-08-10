import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';

import { CartService } from './../cart.service';
import { CustomerService } from 'src/app/customer.service';
import { Customer } from './.././model/customer';
import { Cart } from './.././model/cart';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  customer: Customer = new Customer('', '', '', '', '');
  cust_email: string = '';
  cartItems: Cart[] = [];
  total: number = 0;
  grandTotal: number = 0;
  todayDate: any;
  transId: string = '';

  constructor(
    private customerService: CustomerService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cust_email = sessionStorage.getItem('cust_email') || '';
    this.customerService.getCustomer(this.cust_email).subscribe((data) => {
      this.customer = data;
    });
    this.cartService.getCartItemList().subscribe((data) => {
      this.cartItems = data;
    });
    this.cartService.deleteAllCart().subscribe(() => {
      console.log('');
    });
    this.total = Number(sessionStorage.getItem('grandTotal')) || 0;
    this.grandTotal = this.total + 60; // Assuming the shipping fee is $60
    this.todayDate = formatDate(new Date(), 'dd MMM, yyyy', 'en');
    this.transId = sessionStorage.getItem('transId') || '';
  }
  
  printOrder() {
    window.print();
  }
}
