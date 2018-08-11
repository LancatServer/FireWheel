import { GameObject } from './gameObject'
import { Player } from './player'

export class Monster extends GameObject{
  r :number
  constructor(pos) {
    super()
    this.pos = pos,
    this.m = 15,
    this.r = 30,
    this.shape = 'circle',
    this.friction = 0.85
  }

  update (player :Player) : void{
    /**遊戲更新
     * player 玩家物件，以GameObject型別參考
     * 可以取得玩家的 physical資訊
     */
  }
}