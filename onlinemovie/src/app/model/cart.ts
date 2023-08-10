import { Product } from './product'; // Make sure to provide the correct path to the Product class

export class Cart {
  constructor(
    public id: number,        // Assuming this is the ID of the cart item
    public quantity: number,  // The quantity of the product in the cart
    public price: number,     // The price of the cart item
    public product: Product   // The product details associated with the cart item
  ) {}
}
