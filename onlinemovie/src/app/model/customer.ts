export class Customer {
  email: string;
  password: string;
  name: string;
  contact: string;
  address: string;

  constructor(email: string, password: string, name: string, contact: string, address: string) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.contact = contact;
    this.address = address;
  }
}