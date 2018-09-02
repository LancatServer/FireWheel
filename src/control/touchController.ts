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
  circles :Array<CircleObj>
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

  addCircle ( c :CircleObj ) :void {
    this.circles.push( c )
  }

  addRect ( r :RectObj ) :void {
    this.rects.push(r)
  }

  addListener ( obj :GameObject, callback :Function) :void {
    this.listeners.push( { obj: obj, callback: callback} )
  }

  update () :void {
    for (let r in this.rects) {
      for (let c in this.circles) {
        let circle = this.circles[c]
        let rect = this.rects[r]
        if (this.physical.circle_to_rect(circle, rect)) {
          circle.
        }
      }
    }
  }
}