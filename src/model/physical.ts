import {PhysicalObj, SHAPE, CircleObj, RectObj, Physical} from './obj'
import {Position} from './position'

function set_range (minimal :number, maximum :number, number :number) :number {
  if (number < minimal) {
    return minimal
  }else if (number >  maximum) {
    return maximum
  }else {
    return number
  }
}

function turnPosition (pos :Position, angle :number) :Position {
  /**旋轉座標函數
   * pos 待旋轉座標
   * angle 旋轉角度
   */
  return new Position (
    pos.x * Math.cos(angle) - pos.y * Math.sin(angle),
    pos.x * Math.sin(angle) + pos.y * Math.cos(angle)
  )
}

export class PhysicalController implements Physical {
  circle_to_circle (c1 :CircleObj, c2 :CircleObj) : boolean{
    if (c1.shape !== SHAPE.circle) throw Error("c1 have to be circle")
    if (c2.shape !== SHAPE.circle) throw Error("c2 have to be circle")
    let d : number = (c1.pos.x - c2.pos.x) ** 2 + (c1.pos.y - c2.pos.y) ** 2
    return d < ((c1.r + c2.r) ** 2)
  }

  circle_to_rect (c :CircleObj, r :RectObj) :boolean {
    if (c.shape !== SHAPE.circle) throw Error("c have to be circle")
    if (r.shape !== SHAPE.rect) throw Error("r have to be rect")
    let x = set_range(r.pos.x, r.pos.x + r.wh.x, c.pos.x)
    let y = set_range(r.pos.y, r.pos.y + r.wh.y, c.pos.y)
    let d = (c.pos.x - x) ** 2 + (c.pos.y - y) ** 2
    return d < (c.r ** 2)
  }

  circleRebound (c1 :CircleObj, c2 :CircleObj, k :number) :Position {      //圓形反彈函數
    /**圓形反彈函數
     * k 恢復係數
     */
    if (c1.shape !== SHAPE.circle) throw Error("c1 have to be circle")
    if (c2.shape !== SHAPE.circle) throw Error("c2 have to be circle")
    let angle :number = Math.atan ((c1.pos.y - c2.pos.y) / (c1.pos.x - c2.pos.x)) //求兩圓圓心連線角度
    let c1_turn :Position = turnPosition(c1.v, angle)   //取得兩圓速度旋轉成以圓心連線為0度之向量
    let c2_turn :Position = turnPosition(c2.v, angle)
    c1_turn.x = c2_turn.x * k   //交換值，乘上恢復係數
    return turnPosition(c1_turn, -angle)    //轉回原向量
  }

  rectRebound (c :CircleObj, r :RectObj, k :number) :Position {
    /**矩形反彈函數
     * k 恢復係數
     * 取出最近點，將座標系旋轉至圓心連線水平向量
     * 將x * -k反彈
     * 旋轉回原座標系
     */
    if (c.shape !== SHAPE.circle) throw Error("c have to be circle")
    if (r.shape !== SHAPE.rect) throw Error("r have to be rect")
    let x :number = set_range(r.pos.x, r.pos.x + r.wh.x, c.pos.x)
    let y :number = set_range(r.pos.y, r.pos.y + r.wh.y, c.pos.y)
    let angle :number = Math.atan ((c.pos.y - y) / (c.pos.x - x)) 
    let turn :Position = turnPosition(c.v, angle)
    turn.x *= -k
    return turnPosition(turn, -angle)
  }

  frictionCompute ( obj :PhysicalObj ) :Position {
    return new Position(
      Math.max( 0, obj.v.x - obj.friction * obj.m),
      Math.max( 0, obj.v.y - obj.friction * obj.m)
    )
  }
}