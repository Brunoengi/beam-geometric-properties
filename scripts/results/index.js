export function setValueOnTd (instance, properties) {
  properties.forEach(propertie => {
    const td = document.querySelector(`.td-${propertie}`)
    td.innerHTML = formatNumber(instance[propertie])
  })  
}

function formatNumber (number, decimaisCases = 2) {
  if(number % 1 !== 0) {
    return number.toFixed(decimaisCases)
  }
  return number
} 