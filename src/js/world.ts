import { GameMap } from "./lib/Locations/Map"
import { GameRoom } from "./lib/Locations/Room"

var world = {
  map: new GameMap()
}
// @ts-ignore: Unreachable code error
var data = now_world_lab
data.locations.forEach(room => {
  world.map.addRoom(new GameRoom(room.id, room.name, room.name))
})

data.links.forEach(link => {
  world.map.connectRooms(link[0], link[1])
})