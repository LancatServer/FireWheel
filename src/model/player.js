class Player extends GameObject {
  constructor () {
    this.physical = {
      pos : new Position(0, 0), //位置
      v: new Position(0, 0),    //速度
      m: 10,                    //質量
      shape: 'circle',          //形狀
      r: 30,                    //半徑
      friction: 0.9             //摩擦力
    }
    this.gameStatus = { //遊戲狀態
      blood: 5,         //血量
      hp: 5,            //血量上限
      def: 0,           //防禦
      cd: 500,          //冷卻時間
      speed: 2,         //跑速
    }
  }

  hurt(power) {
    /* 受傷處理 */
  }

  update(key) {
    /**狀態更新 
     * key: 各個按鍵之狀態
    */
    this.v.multiply(this.friction) //將速度乘上摩擦力
    this.pos.add(this.v)
  }

  circleRebound(obj) {
    /**碰到圓形處理 
     * obj: GameObject物件
     * 圓形反彈程式
    */
  }

  rectRebound(obj) {
    /**碰到牆壁處理
     * 牆壁反彈/抵銷程式
     */
  }
}