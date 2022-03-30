export interface Node {
  id?: string
  index?: number
  size?: number
  vx?: number
  vy?: number
  x?: number
  y?: number
}

export interface Link {
  distance?: number
  index?: number
  source?: Node
  target?: Node
}
