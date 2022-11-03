import { Entity } from "../Entity";

export class Item extends Entity {
  constructor (id: number, name:string) {
    super(id, name);
  }
}