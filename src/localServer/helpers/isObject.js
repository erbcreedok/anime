function isObject(A) {
  return  (typeof A === "object" || typeof A === 'function') && (A !== null)
}

export default isObject
