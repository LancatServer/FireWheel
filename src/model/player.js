class Player extends GameObject {
  constructor () {
    super(new Position(), 'circle')
    this.a = 5
    this.friction = 0.9 //摩擦力
    this.blood = 5
    this.blood_up = 5
  }

  hurt(power) {
    /* 受傷處理 */
  }

  update(key) {
    /**狀態更新 
     * key: 各個按鍵之狀態
    */
    this.v *= this.friction //將速度乘上摩擦力
    this.pos += this.v
  }

  circleRebound(obj) {
    /**碰到圓形處理 
     * obj: GameObject物件
    */
  }

  rectRebound(obj) {
    /**碰到牆壁處理 */
  }
}