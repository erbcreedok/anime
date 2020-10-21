import concatClassModifiers from './concatClassModifiers.js'

function modifyClass(className, modifiers) {
  return concatClassModifiers(
    className,
    ...Object.keys(modifiers).filter((key) => modifiers[key])
  )
}

export default modifyClass
