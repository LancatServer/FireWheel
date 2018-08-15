import { Key } from "../src/model/key";
import { Player } from "../src/model/player";
import { GameObject, SHAPE } from "../src/model/gameObject";
import { Position } from "../src/model/position";
import { circle_to_circle, circle_to_rect, circleRebound } from "../src/model/physical";

const key :Key = new Key()
const player :Player = new Player()
const rect :GameObject = new GameObject()
const circle :GameObject = new GameObject()
const canvas :any = document.getElementById('my_canvas')
const ctx = canvas.getContext('2d')

function update () {
  player.update(key)
  if (player.pos.x < player.r || player.pos.x + player.r > canvas.width) {
    player.v.x *= -1
    player.pos.add(player.v)
  }
  if (player.pos.y < 0 || player.pos.y > canvas.height) { 
    player.v.y *= -1 
    player.pos.add(player.v)
  }
  circle_update()
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
    console.log('touch circle')
    let player_v = circleRebound(player, circle, 1)
    circle.v = circleRebound(circle, player, 1)
    player.v = player_v
    player.pos.add(player.v)
    circle.pos.add(circle.v)
  }
  if (circle_to_rect(player, rect) ) {
    console.log('touch rect')
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

function circle_update () {
  if (circle.pos.x < circle.r || circle.pos.x + circle.r > canvas.width) {
    circle.v.x *= -1
    circle.pos.add(circle.v)
  }
  if (circle.pos.y < 0 || circle.pos.y > canvas.height) { 
    circle.v.y *= -1 
    circle.pos.add(circle.v)
  }
  circle.pos.add(circle.v)
}

function circle_beenTouch (obj :GameObject) {
  circle.v = circleRebound(circle, obj, 1)
  circle.pos.add(circle.v)
}

function main () {
  console.log('begin')
  player.pos = new Position(50, 50)
  rect.pos = new Position(100, 100)
  rect.wh = new Position(80, 60)
  rect.shape = SHAPE.rect
  circle.pos = new Position(200, 200)
  circle.r = 15 
  circle.v = new Position(3, 5)
  circle.shape = SHAPE.circle
  document.addEventListener('keydown', keyDown)
  document.addEventListener('keyup', keyUp)
  setInterval(update, 20)
}

main()