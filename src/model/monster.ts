import { GameObject, } from './gameObject'
import { Player } from './player'
import { Position } from './position';
import { SHAPE, Color, CircleObj } from './obj';

export abstract class Monster extends GameObject implements CircleObj {
  blood :number = 1
  r :number = 15
  shape :SHAPE = SHAPE.circle
  friction :number = 0.85
  speed !:number

  constructor() {
    super()
  }

  reset (pos :Position, color :Color) {
    this.pos = pos
    this.v = new Position(0, 0)
    this.color = color
  }

  update (player :GameObject) : void{
    /**遊戲更新
     * player 玩家物件，以GameObject型別參考
     * 可以取得玩家的 physical資訊
     */
  }

  move ( angle :number, distance :number ) :void {
    this.v.x += Math.cos(angle) * distance
    this.v.y += Math.sin(angle) * distance
  }

  near ( pos :Position, speed :number ) :void {
    let x = pos.x - this.pos.x
    let y = pos.y - this.pos.y
    let distance = (x ** 2 + y ** 2) ** 0.5
    this.v.x += x / distance * speed
    this.v.y += y / distance * speed
  }

  injury ( power :number ) :boolean {
    this.blood -= power
    return (this.blood <= 0)
  }
}