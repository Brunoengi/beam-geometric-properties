// Function to Table

export function createTable (classTable) {
  const table = document.createElement('table')
  table.classList.add(`${classTable}`)
  getContainerInputs().appendChild(table)
}

export function createTr (classTable, trClass) {
  const trElement = document.createElement('tr')
  trElement.classList.add(`${trClass}`)
  document.querySelector(`.${classTable}`).appendChild(trElement)
}

export function createTh (classTr, classTh) {
  const th = document.createElement('th')
  th.classList.add(`${classTh}`)
  document.querySelector(`.${classTr}`).appendChild(th)
}

export function createTd (classTr, classTd) {
  const td = document.createElement('td')
  td.classList.add(`${classTd}`)
  document.querySelector(`.${classTr}`).appendChild(td)
}

// Function to create other Elements

// p

export function createP (content) {
  const p = document.createElement('p')
  p.innerHTML = `${content}`
  return p
}

// Function to add content

function addContent (classContent, content) {
 const contentElement = document.querySelector(`.${classContent}`)
 contentElement.innerHTML = `${content}`
}

// Function to add input

function addInput (classContent, content) {
  const contentElement = document.querySelector(`.${classContent}`)
  contentElement.appendChild(content)
}

// Function to create Input

export function createInputNumber (classInput) {
  const inputNumber = document.createElement('input')
  inputNumber.type = 'number'
  inputNumber.classList.add(`${classInput}`)
  return inputNumber
}

// Function to add a value to number input

export function addValueInInput (number, classInput) {
  const td = document.querySelector(`.${classInput}`)
  const input = td.querySelector('input[type=number]')
  input.value = number
}

// Function to get container

export function getContainerInputs (classContainer = 'ctn-inputs') {
  return document.querySelector(`.${classContainer}`)
}

// Function to get Select

export function getSelectValue (inputClass = 'main-select') {
  return document.querySelector(`.${inputClass}`).value
}

// Clear Content

export function clearContent (Element) {
  Element.innerHTML = ''
}

// function to create the main table and the table-head

function createTableAndTh() {
  createTable('main')
  createTr('main', 'title')
  createTh('title', 'title-1')
  addContent('title-1', 'Measure')
  createTh('title', 'title-2')
  addContent('title-2', 'Value')
  createTh('title', 'title-3')
  addContent('title-3', 'Unit')
}

// Functions to each possible value in Select

export function selectRectangule () {
  createTableAndTh()
  
  // Line 2
  createTr('main', 'tr-1')
  createTd('tr-1', 'td-1-1')
  addContent('td-1-1', 'b')
  createTd('tr-1','td-1-2')
  addInput('td-1-2', createInputNumber('input-1'))
  addValueInInput(20, 'td-1-2')
  createTd('tr-1', 'td-1-3')
  addContent('td-1-3', 'cm')

  // Line 3
  createTr('main', 'tr-2')
  createTd('tr-2', 'td-2-1')
  addContent('td-2-1', 'h')
  createTd('tr-2','td-2-2')
  addInput('td-2-2', createInputNumber('input-1'))
  addValueInInput(60, 'td-2-2')
  createTd('tr-2', 'td-2-3')
  addContent('td-2-3', 'cm')
} 

export function selectT () {
  createTableAndTh()

  // Line 2
  createTr('main', 'tr-1')
  createTd('tr-1', 'td-1-1')
  addContent('td-1-1', 'b<sub>f</sub>')
  createTd('tr-1','td-1-2')
  addInput('td-1-2', createInputNumber('input-1'))
  addValueInInput(60, 'td-1-2')
  createTd('tr-1', 'td-1-3')
  addContent('td-1-3', 'cm')

  // Line 3
  createTr('main', 'tr-3')
  createTd('tr-3', 'td-3-1')
  addContent('td-3-1', 'h<sub>f</sub>')
  createTd('tr-3','td-3-2')
  addInput('td-3-2', createInputNumber('input-1'))
  addValueInInput(9, 'td-3-2')
  createTd('tr-3', 'td-3-3')
  addContent('td-3-3', 'cm')

  //Line 4
  createTr('main', 'tr-4')
  createTd('tr-4', 'td-4-1')
  addContent('td-4-1', 'b<sub>w</sub>')
  createTd('tr-4','td-4-2')
  addInput('td-4-2', createInputNumber('input-1'))
  addValueInInput(12, 'td-4-2')
  createTd('tr-4', 'td-4-3')
  addContent('td-4-3', 'cm')

  //Line 5
  createTr('main', 'tr-5')
  createTd('tr-5', 'td-5-1')
  addContent('td-5-1', 'h')
  createTd('tr-5','td-5-2')
  addInput('td-5-2', createInputNumber('input-1'))
  addValueInInput(40, 'td-5-2')
  createTd('tr-5', 'td-5-3')
  addContent('td-5-3', 'cm')
}

export function selectI () {
  createTableAndTh()

  // Line 2
  createTr('main', 'tr-1')
  createTd('tr-1', 'td-1-1')
  addContent('td-1-1', 'b<sub>f</sub>')
  createTd('tr-1','td-1-2')
  addInput('td-1-2', createInputNumber('input-1'))
  addValueInInput(80, 'td-1-2')
  createTd('tr-1', 'td-1-3')
  addContent('td-1-3', 'cm')

  // Line 3
  createTr('main', 'tr-3')
  createTd('tr-3', 'td-3-1')
  addContent('td-3-1', 'h<sub>f</sub>')
  createTd('tr-3','td-3-2')
  addInput('td-3-2', createInputNumber('input-1'))
  addValueInInput(20, 'td-3-2')
  createTd('tr-3', 'td-3-3')
  addContent('td-3-3', 'cm')

  //Line 4
  createTr('main', 'tr-4')
  createTd('tr-4', 'td-4-1')
  addContent('td-4-1', 'b<sub>w</sub>')
  createTd('tr-4','td-4-2')
  addInput('td-4-2', createInputNumber('input-1'))
  addValueInInput(20, 'td-4-2')
  createTd('tr-4', 'td-4-3')
  addContent('td-4-3', 'cm')

  //Line 5
  createTr('main', 'tr-5')
  createTd('tr-5', 'td-5-1')
  addContent('td-5-1', 'b<sub>i</sub>')
  createTd('tr-5','td-5-2')
  addInput('td-5-2', createInputNumber('input-1'))
  addValueInInput(60, 'td-5-2')
  createTd('tr-5', 'td-5-3')
  addContent('td-5-3', 'cm')

  //Line 6
  createTr('main', 'tr-6')
  createTd('tr-6', 'td-6-1')
  addContent('td-6-1', 'h<sub>i</sub>')
  createTd('tr-6','td-6-2')
  addInput('td-6-2', createInputNumber('input-1'))
  addValueInInput(20, 'td-6-2')
  createTd('tr-6', 'td-6-3')
  addContent('td-6-3', 'cm')

  //Line 7
  createTr('main', 'tr-7')
  createTd('tr-7', 'td-7-1')
  addContent('td-7-1', 'h')
  createTd('tr-7','td-7-2')
  addInput('td-7-2', createInputNumber('input-1'))
  addValueInInput(120, 'td-7-2')
  createTd('tr-7', 'td-7-3')
  addContent('td-7-3', 'cm')
}



