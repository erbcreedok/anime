function concatClassModifiers(className, ...modifiers) {
  return [className, ...modifiers.filter((x) => !!x).map((modifier) => `${className}-${modifier}`)].join(' ')
}

export default concatClassModifiers
