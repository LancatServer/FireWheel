import { Color, CircleObj, RectObj } from "../model/obj";

export class PainterImpl implements Painter {
  private canvas = <HTMLCanvasElement> document.getElementById('my_canvas')
  private ctx = <CanvasRenderingContext2D> this.canvas.getContext('2d')
  private background ?:Color

  constructor ( ) {
  }

  public circle ( c :CircleObj, color :Color , stroke :boolean = false, lineWidth :number = 5, beginAngle :number = 0, endAngle :number = Math.PI * 2, anticlockwise :boolean = false) {
    this.ctx.beginPath()
    this.ctx.arc(c.pos.x, c.pos.y, c.r, beginAngle, endAngle, anticlockwise)
    if (stroke) {
      this.ctx.strokeStyle = color.get()
      this.ctx.lineWidth = lineWidth
      this.ctx.stroke()
    }else {
      this.ctx.fillStyle = color.get()
      this.ctx.fill()
    }
    this.ctx.closePath()
  }

  public rect ( r :RectObj, color :Color, stroke :boolean = false ) :void {
    this.ctx.rect(r.pos.x, r.pos.y, r.wh.x, r.wh.y)
    this.ctx.fillStyle = color.get()
    if (stroke) this.ctx.stroke()
    else this.ctx.fill()
  }

  public getContext () :CanvasRenderingContext2D {
    return this.ctx
  }

  public clear () :void {
    this.ctx.clearRect( 0, 0, this.canvas.width, this.canvas.height )
  }
}

export interface Painter {
  clear () :void
  circle ( c :CircleObj, color :Color, stroke ?:boolean, lineWidth ?:number, start ?:number, end ?:number, anticlockwise ?:boolean) :void
  rect ( r :RectObj, color :Color, stroke ?:boolean ) :void
  getContext () :CanvasRenderingContext2D
}