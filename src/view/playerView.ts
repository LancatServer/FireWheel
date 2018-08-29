import { Player } from "../model/player";
import { Position } from "../model/position";
import { Gun } from "../model/gun";
import { PlayerGun } from "../model/playerGun";

export class PlayerView {
  constructor (public player :Player, public gun :Gun) {
  }

  paint (canvas :HTMLCanvasElement, ctx :CanvasRenderingContext2D) {
    ctx.beginPath()
    ctx.arc(this.player.pos.x, this.player.pos.y, this.player.r, 0, Math.PI * 2)
    let gunPos :Position = new Position(
      this.player.pos.x + Math.cos(this.gun.angle) * this.gun.R,
      this.player.pos.y + Math.sin(this.gun.angle) * this.gun.R
    )
    ctx.arc( gunPos.x, gunPos.y, this.gun.r, 0, Math.PI * 2 )
    ctx.fillStyle = this.player.color.get()
    ctx.fill()
    ctx.closePath()
  }
}