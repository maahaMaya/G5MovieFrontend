import { Component, OnInit } from '@angular/core';
import { CartService } from './../cart.service';
import { Product } from './../model/product'; // Import Product from correct path
import { ProductService } from 'src/app/product.service';
import { Cart } from './../model/cart'; // Import Cart from correct path
import { LogService } from '../log.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  searchKey: string = '';
  login: number = 0;
  products?: Product[];

  setAutoHide: boolean = true;
  autoHide: number = 2000;


  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private logService: LogService,
  ) {}

  ngOnInit(): void {
    this.logService.sendHeader(1);
    this.productService.login.subscribe((res) => {
      this.login = res;
    });
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProductList().subscribe((data) => {
      this.products = data;
      console.log(data)
    });
  }

  addToCart(product: Product) {
    // Create a new instance of Cart with appropriate arguments
    const cartItem = new Cart(0, 1, product.price, product);

    this.cartService.addToCart(cartItem).subscribe((data) => {
      console.log(data);
      alert("Produc is added to cart Successfully")
    });
    
  }

  categoryDrama() {
    this.productService.getDrama().subscribe((data) => {
      this.products = data;
    })
  }

  categoryComedy() {
    this.productService.getComedy().subscribe((data) => {
      this.products = data;
    })
  }

  categoryHistorical() {
    this.productService.getHistorical().subscribe((data) => {
      this.products = data;
    })
  }

  categoryThriller() {
    this.productService.getThriller().subscribe((data) => {
      this.products = data;
    })
  }

  Search() {
    if(this.searchKey === ""){
      this.getProducts();
    }
    else{
      this.productService.searchProduct(this.searchKey).subscribe((data) => {
        this.products = data;
        console.log(data)
      })
    }
  }

  showToLogin() {
    alert("Login Please.....")
  }
}