import { Item } from "./Item";
import { ItemStack } from "./ItemStack";

export class Inventory {
  Items: Array<ItemStack>

  constructor() {
    this.Items = [];
  }

  AddItem(src: Item, quantity: number) {
    var Stack: ItemStack = this.GetItemGroupBYID(src.id)
    if (Stack != null) {
      Stack.quantity += 1
      return
    }

    Stack = new ItemStack(src, quantity)
    this.Items.push(Stack)
  };

  RemoveItem(src: Item, quantity: number) {
    var Stack: ItemStack = this.GetItemGroupBYID(src.id)
    if (Stack == null) return

    if (Stack.quantity - quantity < 0) throw new Error(`${Stack.name} tried to unstack more than ${Stack.quantity}`)
    Stack.quantity -= quantity;
    
    if (Stack.quantity <= 0) {
      this.Items.splice(this.Items.findIndex(x => x == Stack))
    }

  }

  GetItemGroupBYID(id: number): ItemStack {
    return this.Items.find(x => x.id === id);
  }

  GetItemGroupByName(name: string): ItemStack {
    name = name + ItemStack.Suffix
    return this.Items.find(x => x.name.includes(name))
  }
}