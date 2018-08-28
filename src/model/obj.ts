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
}

export interface PhysicalObj {
  pos :Position
  v :Position
  friction :number
  m :number
  shape :SHAPE
  restitu :number
}

export interface CircleObj extends PhysicalObj {
  shape :SHAPE
  r :number
}

export interface RectObj extends PhysicalObj {
  shape :SHAPE
  wh :Position
}

export interface Physical {
  circle_to_circle(c1 :CircleObj, c2 :CircleObj) :boolean
  circle_to_rect (c :CircleObj, r :RectObj) :boolean
  circleRebound (c1 :CircleObj, c2 :CircleObj, k :number) :Position
  rectRebound (c :CircleObj, r :RectObj, k :number) :Position
  frictionCompute (obj :PhysicalObj, fps :number) :Position
}