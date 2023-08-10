import { Customer } from "./customer";

export class Purchase {
  constructor(
    public id: number,
    public dop: Date,
    public productname: string,
    public quantity: number,
    public totalcost: number,
    public transactionid: string,
    public customer: Customer
  ) {}
}
