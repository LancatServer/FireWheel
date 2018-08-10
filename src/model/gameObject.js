class GameObject  {
  constructor (pos, shape) {
    this.pos = pos
    this.shape = shape
    this.v = Position(0, 0)
  }
  beenTouch (obj) {
    switch (obj.shape) {
      case "circle" :
        this.circleRebound(obj)
        break
      case "rect" :
        this.rectRebound(obj)
        break 
    }
  }
  circleRebound (obj) {
    /*
      處理對圓形的反彈
      由sub object 定義
    */
  }
  rectRebound (obj) {
      /*
        處理對矩形的反彈
      由sub object 定義
      */
  }
}
