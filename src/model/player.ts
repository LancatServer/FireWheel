import { GameObject } from './gameObject'
import { Position } from './position'

export class Player extends GameObject {
  gameStatus :object = { //遊戲狀態
    blood: 5,         //血量
    hp: 5,            //血量上限
    def: 0,           //防禦
    cd: 500,          //冷卻時間
    speed: 2,         //跑速
  }
  constructor () {
    super()
  }

  hurt(power) {
    /* 受傷處理 */
  }

  update(key) {
    /**狀態更新 
     * key: 各個按鍵之狀態
    */
    this.v.multiply(this.friction) //將速度乘上摩擦力
    this.pos.add(this.v)
  }

  circleRebound(obj) {
    /**碰到圓形處理 
     * obj: GameObject物件
     * 圓形反彈程式
    */
  }

  rectRebound(obj) {
    /**碰到牆壁處理
     * 牆壁反彈/抵銷程式
     */
  }
}