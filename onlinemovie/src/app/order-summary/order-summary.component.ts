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

  constructor() { }

  ngOnInit(): void {
  }

}
