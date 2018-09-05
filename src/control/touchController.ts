import { CircleObj, RectObj, Physical } from "../model/obj";
import { GameObject } from "../model/gameObject";
import { PhysicalController } from "../model/physical";

/**碰撞檢測控制
 * 負責檢測所有 GameObject 型別物件的碰撞
 * 如有物件碰撞，將呼叫物件的 beenTouch 方法，並傳入碰撞到的物件
 * 可使用 add 方法增加監聽器，在指定的物件碰撞時呼叫
 */

export interface TouchController {
  addCircle ( c :CircleObj ) :void
  addRect ( r :RectObj ) :void
  addListener ( obj :GameObject ) :void
  update () :void
}

export class TouchControllerImpl {
  //圓形物件
  circles :Array<CircleObj & GameObject>
  //矩形物件
  rects :Array<RectObj>
  //監聽物件
  listeners :Array<{
    obj :GameObject,
    callback :Function
  }>
  private physical :Physical = new PhysicalController()

  constructor () {
    this.circles = new Array()
    this.rects = new Array()
    this.listeners = new Array()
  }

  addCircle ( c :CircleObj & GameObject ) :void {
    this.circles.push( c )
  }

  addRect ( r :RectObj ) :void {
    this.rects.push(r)
  }

  addListener ( obj :GameObject, callback :Function) :void {
    this.listeners.push( { obj: obj, callback: callback} )
  }

  /**檢查是否碰撞
   * 如果有就呼叫該物件反彈函數
   */
  update () :void {
    /**跟牆壁
     * 目前牆壁無法處理反彈
     */
    for (let r of this.rects) {
      for (let c of this.circles) {
        if (this.physical.circle_to_rect(c, r)) {
          //僅 circle
          c.rectRebound(r)
        }
      }
    }
    for (let c1 of this.circles) {
      for (let c2 of this.circles) {
        if (c1 === c2) break
        if ( this.physical.circle_to_circle(c1, c2)) {
          c1.circleRebound(c2)
          c2.circleRebound(c1)

          //檢查是否被監聽
          this.checkListener(c1, c2)
        }
      }
    }
  }

  /**檢查額外監聽項
   */
  private checkListener (obj :GameObject, obj2 :GameObject) {
    for (let o of this.listeners) {
      if (o.obj === obj) o.callback(obj2)
    }
    for (let o of this.listeners) {
      if (o.obj === obj2) o.callback(obj)
    }
  }
}