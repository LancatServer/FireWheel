import { GameObject, } from './gameObject'
import { Position } from './position'
import { Key } from './key'
import { SHAPE, CircleObj, Color } from './obj';

export class Player extends GameObject implements CircleObj {
  blood !:number
  hp !: number     //血量上限
  def !:number     //防禦
  cd !:number      //冷卻時間
  speed !:number   //跑速
  m = 10
  r = 15
  friction = 2
  shape = SHAPE.circle

  constructor (public color :Color) {
    super()
    this.reset()
  }

  reset () :void {
    this.pos = new Position(0, 0)
    this.v = new Position(0, 0)
    //遊戲屬性
    this.blood = 5
    this.hp = 5
    this.def = 0
    this.cd = 500
    this.speed = 50
  }

  injury(power :number) {
    /* 受傷處理 */
    this.blood -= power - this.blood
    return ( this.blood <= 0 )
  }

  update(key :Key) {
    /**狀態更新 
     * key: 各個按鍵之狀態
    */
    let compute = new Position()
    if (key.up) compute.y += 1
    if (key.down) compute.y -= 1 
    if (key.right) compute.x += 1
    if (key.left) compute.x -= 1
    this.angle = Math.atan2(compute.y, compute.x)
    if (key.up || key.down || key.right || key.left) this.f = this.speed
  }
}