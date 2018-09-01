import { Gun } from "./gun";

export class PlayerGun extends Gun {
  speed :number = Math.PI * 2
  lowspeed :number = Math.PI / 2
  R :number = 30
  r :number = 5

  shot () :void {
    console.log("shot")
  }
}