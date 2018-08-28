import { RectObj } from "./obj";
import { Position } from "./position";

export class Wall implements RectObj {
  constructor(public pos :Position, public wh :Position) {}
}