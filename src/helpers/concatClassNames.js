function concatClassNames(...classNames) {
  return classNames.filter((className) => className && className.trim().length).join(' ')
}

export default concatClassNames
