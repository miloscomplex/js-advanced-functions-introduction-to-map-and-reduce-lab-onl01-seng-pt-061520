// Your code here
function mapToNegativize(array) {
  let resultsArray = []
  array.forEach(element => {
    let newValue = element * -1
    resultsArray.push(newValue)
  })
  return resultsArray
}

function mapToNoChange(array) {
  let resultsArray = []
  array.forEach(element => {
    resultsArray.push(element)
  })
  return resultsArray
}

function mapToDouble(array) {
  let resultsArray = []
  array.forEach(element => {
    let newValue = element * 2
    resultsArray.push(newValue)
  })
  return resultsArray
}

function mapToSquare(array) {
  let resultsArray = []
  array.forEach(element => {
    let newValue = element * element
    resultsArray.push(newValue)
  })
  return resultsArray
}

function reduceToTotal(sourceArray, startingPoint= 0) {
  sourceArray.forEach(element => {
    startingPoint += element
  })
  return startingPoint
}

function reduceToAllTrue(sourceArray) {
  return sourceArray.every(element => !!element)
}

function reduceToAnyTrue(sourceArray) {
  const truthy = (element) => !!element
  if (sourceArray.some(truthy)) {
    return true
  } else {
    return false 
  }
}
