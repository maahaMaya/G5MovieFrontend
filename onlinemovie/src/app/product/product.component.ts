import { Component, OnInit } from '@angular/core';
import { CartService } from './../cart.service';
import { Product } from './../model/product'; // Import Product from correct path
import { ProductService } from 'src/app/product.service';
import { Cart } from './../model/cart'; // Import Cart from correct path

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  searchKey: string = '';
  login: number = 0;
  products!: Product[];

  setAutoHide: boolean = true;
  autoHide: number = 2000;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    //edit
    //this.logService.sendHeader(1);
    // this.productService.login.subscribe((res) => {
    //   this.login = res;
    // });
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
    // Implementation for Drama category
  }

  categoryComedy() {
    // Implementation for Comedy category
  }

  categoryHistorical() {
    // Implementation for Historical category
  }

  categoryThriller() {
    // Implementation for Thriller category
  }

  Search() {
    // Implementation for Search
  }

  showToLogin() {
    alert("Login Please.....")
  }
}