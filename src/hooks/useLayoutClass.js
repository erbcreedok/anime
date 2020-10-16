import { useEffect } from 'react'

function useLayoutClass(layoutName) {
  useEffect(() => {
    document.body.classList.add(layoutName)
    return () => {
      document.body.classList.remove(layoutName)
    }
  })
}

export default useLayoutClass
