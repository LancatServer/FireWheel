/**碰撞檢測物件
 * 此型別物件可以被檢測碰撞檢測，並以beenTouch 來處理碰撞
 * 擁有physical屬性，其中帶有各個物理資料
 */
import {Position} from './position'

export const enum SHAPE {
  circle,
  rect
} 

export class GameObject  {
  pos : Position = new Position()     //位置
  v : Position = new Position()       //速度
  m : number = 0         //質量
  shape :SHAPE = SHAPE.circle       //形狀
  friction : number = 0.9  //摩擦力
  r : number = 10         //半徑(圓形)
  wh :Position = new Position()

  beenTouch (obj :GameObject) :void {
    switch (obj.shape) {
      case SHAPE.circle :
        this.circleRebound(obj)
        break
      case SHAPE.rect :
        this.rectRebound(obj)
        break 
    }
  }
  circleRebound (obj :GameObject) :void{
    /*
      處理對圓形的反彈
      由sub object 定義
    */
  }
  rectRebound (obj :GameObject) :void{
      /*
        處理對矩形的反彈
      由sub object 定義
      */
  }
}
