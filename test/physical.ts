import {circleRebound} from '../src/model/physical'
import {GameObject ,SHAPE} from '../src/model/gameObject'
import { Position } from '../src/model/position';

/**測試圓形反彈函數
 * 以測試水平方向、垂直方向
 * 結果：正確，但會有小數 .99999999問題，不解決
 */
function circleReboundTest() {
  let c1 :GameObject = new GameObject()
  let c2 :GameObject = new GameObject()
  c1.pos =  new Position(0, 0)
  c1.v = new Position(10, 10)
  c2.pos = new Position(10, 0)
  c2.v = new Position(-10, 10)
  let result :Position = circleRebound(c1, c2, 1) 
  console.log(result.x === -10 )
  c2.v.x = 100
  console.log(circleRebound(c1, c2, 1).x === 100)
  console.log(circleRebound(c1, c2, 0.8).x === 80)
  c2.pos = new Position(0, 10)
  c2.v = new Position(100, -50)
  console.log(Math.floor(circleRebound(c1, c2, 1).y) == -50) //結果為-49.999999999999
}
circleReboundTest()