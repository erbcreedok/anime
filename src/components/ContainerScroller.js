import React, { useEffect, useRef, useState } from 'react'
import inheritPropClassName from '../helpers/inheritPropClassName.js'
// import { Icon } from 'rsuite'
// import concatClassModifiers from '../helpers/concatClassModifiers.js'

function ContainerScroller({ children, ...rest}) {
  const containerRef = useRef()
  const [containerOffset, setContainerOffset] = useState(0)

  useEffect(() => {
    const elem = containerRef.current
    if (elem) {
      setContainerOffset(elem.offsetLeft)
    }
  }, [containerRef])

  return (
    <>
      <div className='container' ref={containerRef}/>
      <div className={inheritPropClassName(rest, 'container_scroller')}>
        <div style={{minWidth: containerOffset, minHeight: 1}} />
        {children}
        <div style={{minWidth: containerOffset, minHeight: 1}} />
      </div>
      {/*<button className={concatClassModifiers('container_scroller__button', 'left')} style={{minWidth: containerOffset, minHeight: 1}}>*/}
      {/*  <Icon icon='angle-left' size='3x' />*/}
      {/*</button>*/}
      {/*<button className={concatClassModifiers('container_scroller__button', 'right')} style={{minWidth: containerOffset, minHeight: 1}}>*/}
      {/*  <Icon icon='angle-right' size='3x' />*/}
      {/*</button>*/}
    </>
  )
}

export default ContainerScroller
