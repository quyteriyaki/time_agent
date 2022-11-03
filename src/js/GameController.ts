import {GameMap} from "./lib/Locations/Map"
import { Character } from "./lib/Characters/Character";
import { GameRoom } from "./lib/Locations/Room";
import { now_world_lab } from "../config/world_data_main";

export class GameController {
  map: GameMap;
  _mapData: object;
  playerInstance: Character;

  constructor() {
    this.map = new GameMap();
    this._mapData = null;
    this.playerInstance = null;
  }

  externalBuild(){
    // @ts-ignore: Unreachable code error
    this.selectMap(now_world_lab)
    this.populateCharacters()
  }

  selectMap(data) {
    this._mapData = data;
    // @ts-ignore: Unreachable code error
    this._mapData.locations.forEach(room => {
      this.map.addRoom(new GameRoom(room.id, room.name, room.name))
      // Add default items and characters, eventually
    })

    // @ts-ignore: Unreachable code error
    this._mapData.links.forEach(link => this.map.connectRooms(link[0], link[1]))
  }

  populateCharacters() {
    // Well we already have mapdata
    // @ts-ignore: Unreachable code error
    this._mapData.characters.forEach(char => {
      var c = null
      if (char.type == "player") {
        // Create new player instance
        this.playerInstance = new Character(char.id, char.name)
        c = this.playerInstance
      } else {
        // Create the character and place them in their location in the world
        c = new Character(char.id, char.name);
      }
      var m = this.map.getRoomByID(char.defaultRoom);
      m.characters.push(c)
    })
  }
}