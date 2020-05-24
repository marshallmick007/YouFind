import { Address } from "./address.model";

export class Person {
  id: string;
  name: string;
  address: Address;
  age: number;
  interests: string[];
  avatar: string;

  constructor() {
    this.address = new Address();
  }
}
