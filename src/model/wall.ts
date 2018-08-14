import { GameObject } from "./gameObject";
import { Position } from "./position";

export class Wall extends GameObject {
  constructor (public pos , public w, public h) {
    super()
  }
}