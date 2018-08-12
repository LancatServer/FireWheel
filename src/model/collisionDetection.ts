import {GameObject} from './gameObject'

export function circle_to_circle (c1 :GameObject, c2 :GameObject) : boolean{
  let d : number = (c1.pos.x - c2.pos.x) ^ 2 + (c1.pos.y - c2.pos.y) ^ 2
  return d < ((c1.r + c2.r) ^ 2)
}

function set_range (minimal :number, maximum :number, number :number) :number {
  if (number < minimal) {
    return minimal
  }else if (number >  maximum) {
    return maximum
  }else {
    return number
  }
}

export function circle_to_rect (c :GameObject, r :GameObject) :boolean {
  let x = set_range(r.pos.x, r.pos.x + r.w, c.pos.x)
  let y = set_range(r.pos.y, r.pos.y + r.h, c.pos.y)
  let d = (c.pos.x - x) ^ 2 + (c.pos.y - y) ^ 2
  return d < (c.r ^ 2)
}