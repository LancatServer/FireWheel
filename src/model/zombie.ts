import { Monster } from "./monster";
import { Position } from "./position";
import { Color } from "./obj";
import { Player } from "./player";

export class Zombie extends Monster{
  constructor () {
    super()
    this.r = 15
    this.speed = 5
  }

  update (player :Player) :void {
    this.near(player.pos, this.speed)
  }
}