import concatClassNames from './concatClassNames.js'

function inheritPropClassName({className = ''} = {}, initClassName = '', ...classNames) {
  return concatClassNames(className, initClassName, ...classNames)
}

export default inheritPropClassName
