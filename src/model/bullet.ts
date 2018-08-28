import { GameObject } from "./gameObject";
import { CircleObj } from "./obj";
import { Position } from "./position";

export class Bullet extends GameObject implements CircleObj{
  speed !:number
  constructor ( public angle :number, public pos :Position, power :number ) {
    super()
    this.v = new Position( pos.x + Math.cos(angle) * this.speed * power,
      pos.y + Math.sin(angle) * this.speed * power )
  }
}