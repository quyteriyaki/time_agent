import { Entity } from "./Entity";

export class EntityConstructor {
  entities: Array<Entity>
  constructor() {
    this.entities = [];
    
  }

  CreateEntity(name: string, id: number = -1) : Entity {
    if (id == -1) {
      id = this.entities.length + 1;
    }
    const obj: Entity = new Entity(id, name)
    this.entities.push(obj);
    return obj;
  }

  BindEntityHere(obj: Entity) {
    this.entities.push(obj);
  }

  GetEntityByID(id: number) : Entity {
    return this.entities.find(x => x.id == id);
  }

  GetEntitiesByType() {}
}