import { timer } from "./timer";
import { Color } from "./obj";

export class Gun {
  angle :number = 0
  speed !:number
  R !:number
  r !:number
  private shoting :boolean = false
  private direction :number = 1
  cycle :number = 2000
  
  constructor ( public color :Color) {
  }

  update (fps :number) {
    //是否按下發射鍵
    this.angle += this.speed * this.direction / fps
  }

  keyDown () {
    this.shoting = true
    this.direction *= -1
    timer(this.changeDirection, this.cycle)
  }

  keyUp () {
    this.shoting = false
    this.shot()
  }

  private changeDirection () {
    if (this.shoting) {
      this.direction *= -1
      timer(this.changeDirection, this.cycle)
    }
  }

  shot () :void {

  }
}