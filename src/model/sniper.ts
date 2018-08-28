import { Monster } from "./monster";
import { Player } from "./player";

export class Sniper extends Monster{
  max_d :number = 800
  min_d :number = 400
  speed :number = 10
  update (player :Player) {
    let distance = (this.pos.x - player.pos.x) ** 2 + (this.pos.y - player.pos.y) ** 2
    if (distance > this.max_d ** 2 ) {
      this.near(player.pos, this.speed)
    }else if (distance < this.min_d ** 2) {
      this.near(player.pos, -this.speed)
    }
  }
}