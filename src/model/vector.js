class Vector {
  constructor (x=0, y=0) {
    this.x = x
    this.y = y
  }

  add (vector) {
    /**加法
     * 將加上另一個Vector
     */
    thix.x += vector.x
    thix.y += vector.y
  }

  multiply (number) {
    /**乘法
     * 將數值乘上一個number
     */
    thix.x *= number
    this.y *= number
  }
}
