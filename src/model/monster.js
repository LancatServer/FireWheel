class Monster extends GameObject{
  constructor(pos) {
    this.physical = {
      pos: pos,
      v: new Position(0, 0),
      m: 15,
      r: 30,
      shape: 'circle',
      friction: 0.85
    }
  }

  update (player) {
    /**遊戲更新
     * player 玩家物件，以GameObject型別參考
     * 可以取得玩家的 physical資訊
     */
  }
}