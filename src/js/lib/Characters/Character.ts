import { Action } from "../Actions/Actions";
import { Inventory } from "../Items/Inventory";

export class Character{
  default_act: Action[];
  relations: object;
  inv: Inventory

  constructor (id: number, name: string) {
    // Holds information as to what this character will do in the current timeline
    // When it deviates, if the deviation sequence is finished, it will attempt to resume
    // Otherwise if not possible, it will follow a designated AI task (maybe amplified)
    this.default_act = []

    // Alternative is to implement a full GOAPCharacter AI

    // Holds information about other people that they have seen
    this.relations = {}

    // Holds physical items
    this.inv = new Inventory();
  }
}