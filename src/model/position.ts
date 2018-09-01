export class Position {
  x : number
  y : number
  constructor (x=0, y=0) {
    this.x = x
    this.y = y
  }

  add (pos :Position):Position {
    /**加法
     * 將加上另一個Vector
     */
    return new Position(
      this.x + pos.x,
      this.y + pos.y
    )
  }

  multiply ( number :number ) :Position {
    return new Position(
      this.x * number,
      this.y * number
    )
  }
}
