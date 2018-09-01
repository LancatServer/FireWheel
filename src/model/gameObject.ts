/**碰撞檢測物件
 */
import {Position} from './position'
import { PhysicalController } from './physical'
import { PhysicalObj, SHAPE, Color, RectObj, Physical } from './obj';

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
  f :number = 0
  angle :number = 0

  circleRebound (obj :PhysicalObj) :void{
    this.v = physical.circleRebound(this, obj, this.restitu)
  }

  rectRebound (obj :RectObj) :void{
    this.v = physical.rectRebound(this, obj, this.restitu)
  }

  updatePos ( fps :number) :void {
    this.pos = physical.frictionCompute(this, fps)
  }
}
