import { Color, CircleObj } from "../model/obj";

export class Painter {
  private canvas = <HTMLCanvasElement> document.getElementById('my_canvas')
  private ctx = <CanvasRenderingContext2D> this.canvas.getContext('2d')
  private background :Color

  constructor ( bg :Color ) {
    this.background = bg
  }

  public circle ( c :CircleObj, color :Color , stroke :boolean = false, beginAngle :number = 0, endAngle :number = Math.PI * 2, anticlockwise :boolean = false) {
    this.ctx.beginPath()
    this.ctx.arc(c.pos.x, c.pos.y, c.r, beginAngle, endAngle, anticlockwise)
    this.ctx.fillStyle = color.get()
    if (stroke) {
      this.ctx.stroke()
    }else {
      this.ctx.fill()
    }
    this.ctx.closePath()
  }
}