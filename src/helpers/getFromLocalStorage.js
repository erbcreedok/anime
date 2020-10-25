function getFromLocalStorage(name, defaultValue = null) {
  try {
    return JSON.parse(localStorage.getItem(name)) || defaultValue
  } catch (e) {
    return defaultValue
  }
}

export default getFromLocalStorage
