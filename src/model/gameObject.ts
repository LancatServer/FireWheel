/**碰撞檢測物件
 * 此型別物件可以被檢測碰撞檢測，並以beenTouch 來處理碰撞
 * 擁有physical屬性，其中帶有各個物理資料
 */
import {Position} from './position'
import { PhysicalController } from './physical'
import { PhysicalObj, SHAPE, Color, CircleObj, RectObj, Physical } from './obj';

const physical :Physical = new PhysicalController()

export abstract class GameObject implements PhysicalObj{
  pos !:Position 
  v :Position = new Position()
  friction !:number 
  m :number = 1
  shape !:SHAPE 
  restitu :number = 1
  color !:Color
  r :number = 0

  circleRebound (obj :CircleObj) :void{
    /*
      處理對圓形的反彈
      由sub object 定義
    */
    this.v = physical.circleRebound(this, obj, this.restitu)
  }

  rectRebound (obj :RectObj) :void{
    /*
      處理對矩形的反彈
    由sub object 定義
    */
    this.v = physical.rectRebound(this, obj, this.restitu)
  }

  updateV( fps :number) :void {
    this.v = physical.frictionCompute(this, fps)
  }

  updatePos ( fps :number) :void {
    this.pos = this.pos.add(this.v.multiply(1 / fps))
  }
}
