import { GameRoom } from "./Room";
import { Character } from "../Characters/Character";

export class GameMap {
  rooms: Map<number, GameRoom>

  constructor() {
    this.rooms = new Map<number, GameRoom>();
  }

  addRoom(room: GameRoom): void {
    this.rooms[room.id] = room
  }

  getRoomByName(name: string): GameRoom {
    this.rooms.forEach((v) => {
      if (v.name == name) return v;
    })
    return null;
  }

  getRoomByID(id: number): GameRoom {
    return this.rooms[id]
  }

  connectRooms(roomA: number, roomB: number) {
    this.getRoomByID(roomA).connected.push(this.getRoomByID(roomB))
    this.getRoomByID(roomB).connected.push(this.getRoomByID(roomA))
  }

  findCharacter(char: Character): GameRoom | null{
    this.rooms.forEach((v) => {
      if (v.characters.findIndex(c => c == char)) {
        return v;
      }
    })

    return null;
  }
}