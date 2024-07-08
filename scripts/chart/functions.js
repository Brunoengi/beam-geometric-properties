export function getMaxAndMinAxesRectangule (b, h) {
  const largerMeasure = b > h ? b : h 
  return constructMaxAndMinObject(largerMeasure)
}

export function getMaxAndMinAxesT (bf, hf, bw, h) {
  const largerMeasure = bf >  h ? bf : h 
  return constructMaxAndMinObject(largerMeasure)
}

export function getMaxAndMinAxesI (bf, hf, bw, bi, hi, h) {
  const largerBoard = bf > hi ? bf : hi
  const largerMeasure = h > largerBoard ? h : largerBoard
  return constructMaxAndMinObject(largerMeasure)
}

function constructMaxAndMinObject (largerMeasure) {
  console.log('medida maior', largerMeasure)
  return {
    x: {
      max: largerMeasure/2, 
      min: -largerMeasure/2
    },
    y: {
      max: largerMeasure,
      min: 0
    }
  }
}

