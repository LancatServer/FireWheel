import { GameObject } from "./gameObject";
import { timer } from "./timer";
import { Color } from "./obj";

export class Gun {
  speed !:number
  shuting :boolean = false
  angle :number = 0
  direction :number = 0
  cycle :number = 2
  color !:Color
  
  constructor (player :GameObject) {
    this.color = player.color
  }

  update () {
    //是否按下發射鍵
    if (this.shuting) {
      this.angle += this.speed * this.direction
    } 
  }

  keyDown () {
    this.shuting = true
    timer(this.changeDirection, this.cycle)
  }

  keyUp () {
    this.shuting = false
  }

  changeDirection () {
    if (this.shuting) {
      this.direction *= -1
      timer(this.changeDirection, this.cycle)
    }
  }
}