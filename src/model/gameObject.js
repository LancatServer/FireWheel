/**碰撞檢測物件
 * 此型別物件可以被檢測碰撞檢測，並以beenTouch 來處理碰撞
 * 擁有physical屬性，其中帶有各個物理資料
 */
class GameObject  {
  constructor() {
    this.physical = {
      pos,
      v,
      m, 
      shape,
      friction
    }
  }
  beenTouch (obj) {
    switch (obj.physical.shape) {
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
