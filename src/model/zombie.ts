import { Monster } from "./monster";
import { GameObject } from "./gameObject";

export class Zombie extends Monster{
  constructor () {
    super()
    this.r = 15
    this.speed = 5
  }

  update (player :GameObject) :void {
    this.near(player.pos, this.speed)
  }
}