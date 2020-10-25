function generateId(uniques = []) {
  let id = '_' + Math.random().toString(36).substr(2, 9);
  if (uniques.includes(id)) {
    id = generateId(uniques)
  }
  return id
}

export default generateId
