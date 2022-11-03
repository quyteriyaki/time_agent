import { ItemStack } from "../Items/ItemStack";
import { Character } from "../Characters/Character";

export class GameRoom {
  id: number;
  name: string;
  description: string;
  connected: GameRoom[];
  objects: ItemStack[];
  characters: Character[];
  constructor(id: number, name: string, description: string) {
    this.id = id
    this.name = name
    this.description = description
    this.connected = []
    this.objects = []
    this.characters = []
    
    // this.objects.push(new Item(1, "Spoon", "Something peculiar"))
  }

  setRoomLinks(window: Window) {
    // @ts-ignore: onclick exists
    PassageTools.GetPassageTag(this.name).onclick = () => {
      // @ts-ignore: story exists
      // @ts-ignore: story exists
      window.story.state.tools.AddPassage(this)
    }
  }

  generateLinks() {
    var arrayOutput = this.connected.map(room => {
      return `[[Visit ${room.name}|${room.name}]]`
    })
    return arrayOutput.join("<br/>")
  }
}