import { GameObject, SHAPE } from './gameObject'
import { Position } from './position'
import { circleRebound, rectRebound } from './physical'
import { Key } from './key'

export class Player extends GameObject {
  blood :number   //血量
  hp : number     //血量上限
  def :number     //防禦
  cd :number      //冷卻時間
  speed :number   //跑速
  constructor () {
    super()
    this.pos = new Position(0, 0)
    this.v = new Position(0, 0)
    this.m = 10
    this.shape = SHAPE.circle
    this.friction = 0.9
    this.r = 15
    //遊戲屬性
    this.blood = 5
    this.hp = 5
    this.def = 0
    this.cd = 500
    this.speed = 2
  }

  hurt(power) {
    /* 受傷處理 */
  }

  update(key :Key) {
    /**狀態更新 
     * key: 各個按鍵之狀態
    */
    this.v.multiply(this.friction) //將速度乘上摩擦力

    if (key.up) this.v.y += this.speed
    if (key.down) this.v.y -= this.speed
    if (key.right) this.v.x += this.speed
    if (key.left) this.v.x -= this.speed

    this.pos.add(this.v)
  }

  circleRebound(obj :GameObject) {
    /**碰到圓形處理 
     * obj: GameObject物件
     * 圓形反彈程式
    */
    this.v = circleRebound(this, obj, 1.5)
  }

  rectRebound(obj :GameObject) {
    /**碰到牆壁處理
     * 牆壁反彈/抵銷程式
     */
    this.v = rectRebound(this, obj, 1)
  }
}