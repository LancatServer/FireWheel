import { PlayerController } from "../src/control/playerController";
import { Color } from "../src/model/obj";
import { Painter, PainterImpl } from "../src/view/painter";
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
const fps = 50
const painter :Painter = new PainterImpl()
function main () {
  controller.update(fps)
  controller.paint(painter)
}
setInterval(main, 1000 / fps)