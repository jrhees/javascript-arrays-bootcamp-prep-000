var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function  addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray() {
  return array.unshift(element)
}

function addElementToEndOfArray(array, element) {
  return [...array, element]

}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element)
}
