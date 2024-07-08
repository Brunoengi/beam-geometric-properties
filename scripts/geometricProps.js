import GeometricProps from "../node_modules/geometric-props/dist/index.js";

export function createPointsRectangule(b, h) {
  return [
    { 'x': b/2, 'y': 0 },
    { 'x': b/2, 'y': h },
    { 'x': -b/2, 'y': h },
    { 'x': -b/2, 'y': 0 },
    { 'x': b/2, 'y': 0 }
  ]
}

export function createPointsT (bf, hf, bw, h) {
  return [
    { 'x': bw/2, 'y': 0 },
    { 'x': bw/2, 'y': h - hf },
    { 'x': bf/2, 'y': h - hf },
    { 'x': bf/2, 'y': h },
    { 'x': -bf/2, 'y': h },
    { 'x': -bf/2, 'y': h - hf },
    { 'x': -bw/2, 'y': h - hf },
    { 'x': -bw/2, 'y': 0 },
    { 'x': bw/2, 'y': 0 },
  ]
}

export function createPointsI (bf, hf, bw, bi, hi, h) {
  return [
    { 'x': bi/2, 'y': 0 },
    { 'x': bi/2, 'y': hi },
    { 'x': bw/2, 'y': hi },
    { 'x': bw/2, 'y': h - hf },
    { 'x': bf/2, 'y': h - hf },
    { 'x': bf/2, 'y': h },
    { 'x': -bf/2, 'y': h },
    { 'x': -bf/2, 'y': h - hf },
    { 'x': -bw/2, 'y': h - hf },
    { 'x': -bw/2, 'y': hi },
    { 'x': -bi/2, 'y': hi },
    { 'x': -bi/2, 'y': 0 },
    { 'x': bi/2, 'y': 0 },
  ]
}

export function createIntanceGeometricProps(points) {
  return new GeometricProps(points)
}