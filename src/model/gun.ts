import { timer } from "./timer";
import { Color } from "./obj";

export class Gun {
  angle :number = 0
  speed !:number
  lowspeed !:number 
  R !:number
  r !:number
  private shoting :boolean = false
  direction :number = 1
  cycle :number = 500
  
  constructor ( public color :Color) {
  }

  update (fps :number) {
    //是否按下發射鍵
    if (this.shoting) {
      this.angle += this.lowspeed * this.direction / fps
    } else {
      this.angle += this.speed * this.direction / fps
    }
  }

  keyDown () {
    this.shoting = true
    this.changeDirection(this)
  }

  keyUp () {
    this.shoting = false
    this.shot()
  }

  changeDirection (obj :Gun) {
    if (obj.shoting) {
      obj.direction *= -1
      timer(() => this.changeDirection(obj), obj.cycle)
    }
  }

  shot () :void {}
}