import { Key } from "../src/model/key";
import { Player } from "../src/model/player";
import { GameObject } from "../src/model/gameObject";
import { Position } from "../src/model/position";
import { circle_to_circle, circle_to_rect } from "../src/model/physical";

const key :Key = new Key()
const player :Player = new Player()
const rect :GameObject = new GameObject()
const circle :GameObject = new GameObject()
const canvas = <HTMLCanvasElement> document.getElementById('my_canvas')
const ctx = canvas.getContext('2d')

function update () {
  player.update(key)
  touch()
  paint()
}

function paint () {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  ctx.beginPath()
  ctx.rect(rect.pos.x, rect.pos.y, rect.wh.x, rect.wh.y)
  ctx.fillStyle = '#FF0000'
  ctx.fill()
  ctx.closePath()

  ctx.beginPath()
  ctx.arc(player.pos.x, player.pos.y, player.r, 0, 2 * Math.PI)
  ctx.fillStyle = '#00FF00'
  ctx.fill()
  ctx.closePath()
  
  ctx.beginPath()
  ctx.arc(circle.pos.x, circle.pos.y, circle.r, 0, 2 * Math.PI)
  ctx.fillStyle = '#0000FF'
  ctx.fill()
  ctx.closePath()
}

function touch () {
  if (circle_to_circle(player, circle) ) {
    player.beenTouch(circle)
  }
  if (circle_to_rect(player, rect) ) {
    player.beenTouch(rect)
  }
}

function keyDown (e :any) {
  if (e.defaultPrevented) return
  switch (e.key) {
    case "ArrowUp":
      key.up = true
      break
    case "ArrowDown":
      key.down = true
      break
    case 'ArrowRight':
      key.right = true
      break
    case 'ArrowLeft':
      key.left = true
      break
    default:
      console.log(e.key)
      return
  }
}

function keyUp (e :any) {
  if (e.defaultPrevented) return
  switch (e.key) {
    case "ArrowUp":
      key.up = false
      break
    case "ArrowDown":
      key.down = false
      break
    case 'ArrowRight':
      key.right = false
      break
    case 'ArrowLeft':
      key.left = false
      break
    default:
      console.log(e.key)
      return
  }
}

function main () {
  console.log('begin')
  player.pos = new Position(50, 50)
  rect.pos = new Position(100, 100)
  rect.wh = new Position(80, 60)
  circle.pos = new Position(200, 200)
  circle.r = 20
  circle.v = new Position(3, 5)
  document.addEventListener('keydown', keyDown)
  document.addEventListener('keyup', keyUp)
  debugger
  setInterval(50, update)
}

debugger
main()