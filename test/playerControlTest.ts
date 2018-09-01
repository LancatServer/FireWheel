import { PlayerController } from "../src/control/playerController";
import { Color } from "../src/model/obj";
const setting = {
  color: new Color([200, 150, 80]),
  key : {
    up :'w',
    down :'s',
    right :'d',
    left :'a',
    space :' ',
    enter :'Enter'
  }
}
const controller = new PlayerController(setting)
const fps = 100
const canvas = <HTMLCanvasElement> document.getElementById('my_canvas')
const ctx = <CanvasRenderingContext2D> canvas.getContext('2d')
function main () {
  controller.update(fps)
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  controller.paint(canvas, ctx)
}
setInterval(main, 1000 / fps)