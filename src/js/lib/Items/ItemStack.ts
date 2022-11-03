import { Entity } from "../Entity";
import { Item } from "./Item";

export class ItemStack extends Entity {
  src: Item;
  quantity: number;

  static makeStackID(): number {
    return this.Prefix + this.AUTO_ID_INCREMENTER;
  }

  constructor(src: Item, quantity: number) {
    super(ItemStack.makeStackID(), src.name + "_stack")
    ItemStack.IncrementID()
    this.src = src
    this.quantity = quantity
  }

}