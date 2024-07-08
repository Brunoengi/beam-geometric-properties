import { createTable, createTh, createTr, getSelectValue, selectRectangule, selectT, clearContent, selectI } from './form/functions.js'
import { createPointsI, createPointsRectangule, createPointsT, createIntanceGeometricProps } from './geometricProps.js'
import { destroyAndCreateCanvas } from './chart/render.js'
import { setChart } from './chart/render.js'
import { getMaxAndMinAxesI, getMaxAndMinAxesRectangule, getMaxAndMinAxesT } from './chart/functions.js'
import './geometricProps.js'
import './chart/render.js'
import './geometricProps.js'



document.addEventListener('DOMContentLoaded', () => {
  const getSelectComponent = document.querySelector('.main-select')
  const getButtonCalculate = document.querySelector('.btn-calculate')
  selectRectangule()

  getSelectComponent.addEventListener('change', EventChangeSelect)
  getButtonCalculate.addEventListener('click', getInputsAndSelectValue)
})  
 
function EventChangeSelect (e) {
  destroyAndCreateCanvas()
  const imgHelperComponent = document.querySelector('.img-helper')
  const ctnInputsElement = document.querySelector(`.ctn-inputs`)
  clearContent(ctnInputsElement)
  const targetValue = e.target.value
  switch (targetValue) {
    case 'rectangular':
      selectRectangule()
      imgHelperComponent.src = './images/rectangularSection.png'
      break
    case 'T':
      selectT()
      imgHelperComponent.src = './images/TSection.png'
      break
    case 'I':
      selectI()
      imgHelperComponent.src = './images/ISection.png'
  }
} 

function getInputsAndSelectValue (e) {
  destroyAndCreateCanvas()
  const ctnInputs = document.querySelector('.ctn-inputs')
  const inputs = ctnInputs.querySelectorAll('input[type="number"]')
  const arrInputValues = Array.from(inputs).map(element => Number(element.value))
  const getSelectComponentValue = document.querySelector('.main-select').value
  InputToGeometricProps(getSelectComponentValue, arrInputValues)
}

function InputToGeometricProps (selectValue, arrInputValues) {
  let bf, hf, bw, bi, hi, h
  const imgHelperComponent = document.querySelector('.img-helper')
  console.log(imgHelperComponent)
  switch (selectValue) {
    case 'rectangular':
      const [base, height] = arrInputValues
      const geometricPointsRec = createPointsRectangule(base, height)
      const limitsRec = getMaxAndMinAxesRectangule(base, height)
      setChart(geometricPointsRec, limitsRec)
      const geometricPropsRec = createIntanceGeometricProps(geometricPointsRec)
      
      break
    case 'T':
      [bf, hf, bw, h] = arrInputValues
      const geometricPointsT = createPointsT(bf, hf, bw, h)
      const limitsT = getMaxAndMinAxesT(bf, hf, bw, h)
      setChart(geometricPointsT, limitsT)
      const geometricPropsT = createIntanceGeometricProps(geometricPointsT)
      break
    case 'I':
      [bf, hf, bw, bi, hi, h] = arrInputValues
      const geometricPointsI = createPointsI(bf, hf, bw, bi, hi, h)
      const limitsI = getMaxAndMinAxesI(bf, hf, bw, bi, hi, h)
      setChart(geometricPointsI, limitsI)
      const geometricPropsI = createIntanceGeometricProps(geometricPointsI)
    } 
}