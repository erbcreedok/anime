function getLocaleString(object, lang = 'ru') {
  const str = object[lang]
  if (str) {
    return str
  }
  return object[Object.keys(object)[0]]
}

export default getLocaleString
