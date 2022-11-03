import { EntityConstructor } from "./lib/EntityConstructor"
import { Entity } from "./lib/Entity"
import { Item } from "./lib/Items/Item"

var a = new EntityConstructor()
Entity.BindConstructor(a)
Entity.SetIDGen(100000, "_ent")

Item.BindConstructor(a)
Item.SetIDGen(200000, "")

console.log(Entity.Suffix)
console.log(Item.Suffix)