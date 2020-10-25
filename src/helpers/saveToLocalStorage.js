function saveToLocalStorage(name, value) {
  localStorage.setItem(name, JSON.stringify(value))
}

export default saveToLocalStorage
