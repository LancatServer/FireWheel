import {GameObject} from './gameObject'
import {Position} from './position'

export function circle_to_circle (c1 :GameObject, c2 :GameObject) : boolean{
  let d : number = (c1.pos.x - c2.pos.x) ^ 2 + (c1.pos.y - c2.pos.y) ^ 2
  return d < ((c1.r + c2.r) ^ 2)
}

function set_range (minimal :number, maximum :number, number :number) :number {
  if (number < minimal) {
    return minimal
  }else if (number >  maximum) {
    return maximum
  }else {
    return number
  }
}

export function circle_to_rect (c :GameObject, r :GameObject) :boolean {
  let x = set_range(r.pos.x, r.pos.x + r.w, c.pos.x)
  let y = set_range(r.pos.y, r.pos.y + r.h, c.pos.y)
  let d = (c.pos.x - x) ^ 2 + (c.pos.y - y) ^ 2
  return d < (c.r ^ 2)
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

export function circleRebound (c1 :GameObject, c2 :GameObject, k :number) :Position {      //圓形反彈函數
  /**圓形反彈函數
   * k 恢復係數
   */
  let angle :number = Math.atan ((c1.pos.y - c2.pos.y) / (c1.pos.x - c2.pos.x)) //求兩圓圓心連線角度
  let c1_turn :Position = turnPosition(c1.v, angle)   //取得兩圓速度旋轉成以圓心連線為0度之向量
  let c2_turn :Position = turnPosition(c2.v, angle)
  c1_turn.x = c2_turn.x * k   //交換值，乘上恢復係數
  return turnPosition(c1_turn, -angle)    //轉回原向量
}

export function rectRebound (c :GameObject, r :GameObject, k :number) :Position {
  /**矩形反彈函數
   * k 恢復係數
   * 取出最近點，將座標系旋轉至圓心連線水平向量
   * 將x * -k反彈
   * 旋轉回原座標系
   */
  let x :number = set_range(r.pos.x, r.pos.x + r.w, c.pos.x)
  let y :number = set_range(r.pos.y, r.pos.y + r.h, c.pos.y)
  let angle :number = Math.atan ((c.pos.y - y) / (c.pos.x - x)) 
  let turn :Position = turnPosition(c.v, angle)
  turn.x *= -k
  return turnPosition(turn, -angle)
}