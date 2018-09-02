import { Player } from "../model/player";
import { Position } from "../model/position";
import { Gun } from "../model/gun";
import { PlayerGun } from "../model/playerGun";
import { Painter } from "./painter";

export class PlayerView {
  constructor (public player :Player, public gun :Gun) {
  }

  paint (painter :Painter) {
    painter.circle(this.player, this.player.color, true)
    let ctx = painter.getContext()
    let gunPos :Position = new Position(
      this.player.pos.x + Math.cos(this.gun.angle) * this.gun.R,
      this.player.pos.y + Math.sin(this.gun.angle) * this.gun.R
    )
    ctx.beginPath()
    ctx.arc( gunPos.x, gunPos.y, this.gun.r, 0, Math.PI * 2 )
    ctx.fillStyle = this.gun.color.get()
    ctx.fill()
  }
}