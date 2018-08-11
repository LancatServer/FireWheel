export class Position {
  x : number
  y : number
  constructor (x=0, y=0) {
    this.x = x
    this.y = y
  }

  add (vector):void {
    /**加法
     * 將加上另一個Vector
     */
    this.x += vector.x
    this.y += vector.y
  }

  multiply (number):void {
    /**乘法
     * 將數值乘上一個number
     */
    this.x *= number
    this.y *= number
  }
}
