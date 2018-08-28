import { GameObject, } from './gameObject'
import { Position } from './position'
import { Key } from './key'
import { SHAPE, PhysicalObj, CircleObj } from './obj';

export class Player extends GameObject implements CircleObj {
  blood !:number
  hp !: number     //血量上限
  def !:number     //防禦
  cd !:number      //冷卻時間
  speed !:number   //跑速
  m = 10
  r = 15
  friction = 0.9
  shape = SHAPE.circle

  constructor () {
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
    this.speed = 2
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

    if (key.up) this.v.y -= this.speed
    if (key.down) this.v.y += this.speed
    if (key.right) this.v.x += this.speed
    if (key.left) this.v.x -= this.speed
  }
}