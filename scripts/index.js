import { createTable, createTh, createTr, getSelectValue, createFormSelectRectangule, createFormSelectT, clearContent, createFormSelectI } from './form/functions.js'
import { createPointsI, createPointsRectangule, createPointsT, createIntanceGeometricProps } from './geometricProps.js'
import { destroyAndCreateCanvas } from './chart/render.js'
import { setChart } from './chart/render.js'
import { getMaxAndMinAxesI, getMaxAndMinAxesRectangule, getMaxAndMinAxesT } from './chart/functions.js'
import { setValueOnTd } from './results/index.js'
import { exportDataToTxt } from './export/index.js'
import './geometricProps.js'
import './chart/render.js'
import './geometricProps.js'


document.addEventListener('DOMContentLoaded', () => {
  const getSelectComponent = document.querySelector('.main-select')
  const getButtonCalculate = document.querySelector('.btn-calculate')
  const getButtonExport = document.querySelector('.btn-export')
  const imgHelperComponent = document.querySelector('.img-helper')
  createFormSelectRectangule()
  imgHelperComponent.src = './images/retangular200x200.png'

  getSelectComponent.addEventListener('change', eventChangeSelect)
  getButtonCalculate.addEventListener('click', getInputsAndSelectValue)
  getButtonExport.addEventListener('click', exportDataToTxt)
})  
 
function eventChangeSelect (e) {
  destroyAndCreateCanvas()
  const imgHelperComponent = document.querySelector('.img-helper')
  const ctnInputsElement = document.querySelector(`.ctn-inputs`)
  clearContent(ctnInputsElement)
  const targetValue = e.target.value
  switch (targetValue) {
    case 'rectangular':
      createFormSelectRectangule()
      imgHelperComponent.src = './images/retangular200x200.png'
      break
    case 'T':
      createFormSelectT()
      imgHelperComponent.src = './images/T200x200.png'
      break
    case 'I':
      createFormSelectI()
      imgHelperComponent.src = './images/I200x200.png'
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
  let bf, hf, bw, bi, hi, h, geometricProps
  const keysGeometricProperties = ['A','Sx','Sy','Ix','Iy','Ixy','Xg','Yg','Ixg','Iyg','Ixyg','Y1','Y2','W1','W2']
  switch (selectValue) {
    case 'rectangular':
      const [base, height] = arrInputValues
      const geometricPointsRec = createPointsRectangule(base, height)
      const limitsRec = getMaxAndMinAxesRectangule(base, height)
      setChart(geometricPointsRec, limitsRec)
      geometricProps = createIntanceGeometricProps(geometricPointsRec)
      setValueOnTd(geometricProps, keysGeometricProperties) 
    break
    case 'T':
      [bf, hf, bw, h] = arrInputValues
      const geometricPointsT = createPointsT(bf, hf, bw, h)
      const limitsT = getMaxAndMinAxesT(bf, hf, bw, h)
      setChart(geometricPointsT, limitsT)
      geometricProps = createIntanceGeometricProps(geometricPointsT)
      setValueOnTd(geometricProps, keysGeometricProperties)
    break
    case 'I':
      [bf, hf, bw, bi, hi, h] = arrInputValues
      const geometricPointsI = createPointsI(bf, hf, bw, bi, hi, h)
      const limitsI = getMaxAndMinAxesI(bf, hf, bw, bi, hi, h)
      setChart(geometricPointsI, limitsI)
      geometricProps = createIntanceGeometricProps(geometricPointsI)
      setValueOnTd(geometricProps, keysGeometricProperties)
    break
  } 
  localStorage.setItem('results', JSON.stringify(geometricProps))
  
}