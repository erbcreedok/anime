import { useEffect } from 'react'

function useLayoutClass(...classes) {
  useEffect(() => {
    classes.forEach((className) => {
      document.body.classList.add(className)
    })
    return () => {
      classes.forEach((className) => {
        document.body.classList.remove(className)
      })
    }
  })
}

export default useLayoutClass
