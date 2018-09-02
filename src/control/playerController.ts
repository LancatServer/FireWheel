import { Player } from "../model/player";
import { Gun } from "../model/gun";
import { Color } from "../model/obj";
import { Bullet } from "../model/bullet";
import { Key } from "../model/key";
import { PlayerGun } from "../model/playerGun";
import { PlayerView } from "../view/playerView";
import { Painter } from "../view/painter";

class keyMap {
  up !:string
  down !:string
  right !:string
  left !:string
  space !:string
  enter !:string
}

export class PlayerController {
  player :Player
  gun :PlayerGun
  key :Key = new Key()
  key_map :keyMap
  playerView :PlayerView

  constructor (setting :{
    color :Color,
    key :keyMap
  }) {
    this.player = new Player(setting.color)
    this.gun = new PlayerGun(setting.color)
    this.key_map = setting.key
    this.playerView = new PlayerView(this.player, this.gun)
    document.addEventListener("keydown", (event :KeyboardEvent) => this.keySet(event, true))
    document.addEventListener("keyup", (event :KeyboardEvent) => this.keySet(event, false))
  }

  update (fps :number) {
    this.player.update(this.key)
    this.gun.update(fps)
    this.player.updateV(fps)
    this.player.updatePos(fps)
    this.player.frictionCompute(fps)
  }

  paint (painter :Painter) :void {
    painter.clear()
    this.playerView.paint(painter)
  }

  keySet (key :KeyboardEvent, type :boolean) {
    switch (key.key) {
      case this.key_map.up :
        this.key.up = type
        break
      case this.key_map.down :
        this.key.down = type
        break
      case this.key_map.right :
        this.key.right = type
        break
      case this.key_map.left :
        this.key.left = type
        break
      case this.key_map.space :
        if (type && this.key.space === false) {
          this.gun.keyDown()
        }else if (!type && this.key.space === true){
          this.gun.keyUp()
        }
        this.key.space = type
        break
      case this.key_map.enter:
        this.key.enter = type
    }
  }
}