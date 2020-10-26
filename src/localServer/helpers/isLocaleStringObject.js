import isObject from './isObject.js'

function isLocaleStringObject(value) {
  return isObject(value) && (value.kk || value.en || value.ru)
}

export default isLocaleStringObject
