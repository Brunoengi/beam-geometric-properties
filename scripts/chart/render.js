import { createPointsRectangule, createPointsT } from "../geometricProps.js";

export function getChartComponent() {
  return document.getElementById('chart')
}

export function setChart (dataPoints, limits) {

  const ctx = getChartComponent()
  Chart.defaults.color = '#fff';
  const data = {
    datasets: [{
      label: 'Beam',
      data: dataPoints,
      showLine: true,
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgb(255, 99, 132)',
      color: 'rgb(255, 199, 132)'
    }],
};

const options = {
  aspectRatio: 1,
  scales: {
    x: {
      beginAtZero: true,
      min: limits.x.min,
      max: limits.x.max,
    },
    y: {
      beginAtZero: true,
      min: limits.y.max,
      max: limits.y.min,
    }
  }
}
  new Chart(ctx, {
    type: 'scatter',
    data: data,
    options: options
  });
}

export function destroyAndCreateCanvas () {
  const parent = getChartComponent().parentNode
  console.log(parent)
  getChartComponent().remove()
  const newCanvas = document.createElement('canvas')
  newCanvas.id = 'chart'
  parent.appendChild(newCanvas)
}
