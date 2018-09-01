import {Position} from './position'

export const enum SHAPE {
  circle,
  rect
} 

export class Color {
  r :number
  g :number
  b :number
  color :Array<number>
  
  constructor(c :Array<number>){
    this.r = c[0]
    this.g = c[1]
    this.b = c[2]
    this.color = c
  }

  get () :string {
    let result :string = ''
    for (let c in this.color) {
      let n :string = this.color[c].toString(16)
      if (n.length === 1) {
        n = '0' + n
      }
      result += n
    }
    return '##' + result
  }
}

export interface PhysicalObj {
  pos :Position
  v :Position
  friction :number
  m :number
  shape :SHAPE
  restitu :number
  f :number,
  angle :number
}

export interface CircleObj {
  r :number
  pos :Position
}

export interface RectObj { 
  wh :Position
  pos :Position
}

export interface Physical {
  circle_to_circle(c1 :CircleObj, c2 :CircleObj) :boolean
  circle_to_rect (c :CircleObj, r :RectObj) :boolean
  circleRebound (c1 :PhysicalObj, c2 :PhysicalObj, k :number) :Position
  rectRebound (c :PhysicalObj, r :RectObj, k :number) :Position
  frictionCompute (obj :PhysicalObj, fps :number) :Position
  updateV (obj :PhysicalObj, fps :number) :Position
}