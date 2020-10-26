import isLocaleStringObject from './isLocaleStringObject.js'
import getLocaleString from './getLocaleString.js'
import isObject from './isObject.js'
import notObjectNotArray from './notObjectNotArray.js'

function formatDataToLocalStrings(object, lang = 'ru') {
  if (notObjectNotArray(object)) {
    return object
  }
  if (Array.isArray(object)) {
    return object.map((f) => formatDataToLocalStrings(f, lang))
  }
  const newObject = {...object}
  Object.keys(object).forEach((key) => {
    const field = object[key]
    if (isLocaleStringObject(field)) {
      newObject[key] = getLocaleString(field, lang)
    } else if (isObject(field) || Array.isArray(field)) {
      newObject[key] = formatDataToLocalStrings(field, lang)
    } else {
      newObject[key] = field
    }
  })
  return newObject
}

export default formatDataToLocalStrings
