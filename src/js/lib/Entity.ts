import { EntityConstructor } from "./EntityConstructor";

export class Entity{
  id: number
  name: string

  static EntityConstructor: EntityConstructor;
  static AUTO_ID_INCREMENTER = 0;
  static Prefix: number;
  static Suffix: string;

  static makeID() : number {
    return this.Prefix + this.AUTO_ID_INCREMENTER;
  }

  static BindConstructor(src: EntityConstructor) {
    this.EntityConstructor = src;
  }

  static SetIDGen(Prefix: number, Suffix: string) {
    this.Prefix = Prefix;
    this.Suffix = Suffix;
  }

  static IncrementID() {
    this.AUTO_ID_INCREMENTER += 1;
  }

  constructor (id: number, name: string) {
    this.id = id
    this.name = name
    Entity.EntityConstructor.BindEntityHere(this);
  }

  GetEquals(other: Entity) : boolean {
    return other.id == this.id;
  }
}