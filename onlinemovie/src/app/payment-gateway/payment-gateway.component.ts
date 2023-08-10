import { LogService } from './..//log.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseService } from 'src/app/purchase.service';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css']
})
export class PaymentGatewayComponent implements OnInit {
  totalCost: number = 0; // Initialize to 0
  cust_email: string = '';
  transId: string = '';
  buyProdMap = { email: '', transactionId: '' };

  constructor(
    private logService: LogService,
    private router: Router,
    private purchaseService: PurchaseService
  ) {}

  ngOnInit(): void {
    this.logService.loggeduserId$.subscribe((id) => {
      if (id === '') {
        this.router.navigate(['']);
      }
    });

    const grandTotal = sessionStorage.getItem('grandTotal');
    if (grandTotal) {
      this.totalCost = 60 + Number(grandTotal);
    }

    this.cust_email = sessionStorage.getItem('cust_email') || '';
    this.generateTransId();
    this.buyProdMap.email = this.cust_email;
    this.buyProdMap.transactionId = this.transId;
  }

  buyProducts() {
    this.purchaseService.buyProducts(this.buyProdMap).subscribe((data) => {
      console.log('movies added to Purchase');
    });
    this.router.navigate(['/orderSummary']);
  }

  generateTransId() {
    const num1 = Math.floor(Math.random() * (999999 - 100000)) + 100000;
    const num2 = Math.floor(Math.random() * (999999 - 100000)) + 100000;
    this.transId = 'TFIB' + num1.toString() + num2.toString();
    sessionStorage.setItem('transId', this.transId);
  }
}
