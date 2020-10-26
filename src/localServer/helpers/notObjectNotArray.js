import isObject from './isObject.js'

function notObjectNotArray(value) {
  return !isObject(value) && !Array.isArray(value)
}

export default notObjectNotArray
