export class Product {
    constructor(
      public id: number,
      public name: string,
      public desc: string,
      public durations: string,
      public category: string,
      public actualPrice: number,
      public discount: number,
      public price: number , // Provide a default value if applicable
      public avail: string,
      public imagepath: string
    ) {}
  }
  