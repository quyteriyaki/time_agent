import { Inventory } from "./Inventory";

export class ContainerItem {
  inv: Inventory;
  constructor (id: number, name:string) {
    this.inv = new Inventory();
  }
}