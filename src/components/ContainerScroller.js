import React, { useEffect, useRef, useState } from 'react'
import inheritPropClassName from '../helpers/inheritPropClassName.js'
import { Icon } from 'rsuite'
import concatClassModifiers from '../helpers/concatClassModifiers.js'

function ContainerScroller({ children, ...rest}) {
  const containerRef = useRef()
  const scrollerRef = useRef()
  const [containerOffset, setContainerOffset] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)
  const [pinned, setPinned] = useState('none')

  useEffect(() => {
    updateContainerOffset()
    window.addEventListener('resize', updateContainerOffset)
    return () => {
      window.removeEventListener('resize', updateContainerOffset)
    }
  }, [containerRef])

  useEffect(() => {
    const elem = scrollerRef.current
    handleScrollerScroll()
    if (elem) {
      elem.addEventListener('scroll', handleScrollerScroll)
    }
    return () => {
      if (elem) {
        elem.removeEventListener('scroll', handleScrollerScroll)
      }
    }
  }, [scrollerRef])

  function handleScrollerScroll() {
    const elem = scrollerRef.current
    if (elem) {
      if (elem.scrollWidth - elem.offsetWidth === 0) {
        setPinned('both')
      }
      else if (elem.scrollLeft === 0) {
        setPinned('left')
      } else if (elem.scrollLeft >= elem.scrollWidth - elem.offsetWidth) {
        setPinned('right')
      } else {
        setPinned('nonee')
      }
    }
  }

  function updateContainerOffset() {
    const elem = containerRef.current
    if (elem) {
      setContainerOffset(elem.offsetLeft)
      setContainerWidth(elem.offsetWidth)
    }
  }

  function scrollContainer(backwards) {
    let timeout
    return () => {
      const elem = scrollerRef.current
      if (elem) {
        const direction = (-1 + (1 * !!backwards) * 2)
        let offset = direction * containerWidth
        offset -= (offset % containerOffset)
        const anchor = (elem.scrollLeft + offset)
        const delay = 10
        const step = (direction * containerWidth) / (delay)
        function scrollToAnchor(oldScrollLeft) {
          clearTimeout(timeout)
          timeout = setTimeout(() => {
            if (Math.abs(elem.scrollLeft - anchor) > Math.abs(step)) {
              elem.scrollLeft += step
              if (elem.scrollLeft !== oldScrollLeft) {
                scrollToAnchor(elem.scrollLeft)
              }
            } else {
              elem.scrollLeft = anchor
            }
          }, delay)
        }
        scrollToAnchor()
      }
    }
  }

  return (
    <div className='container_scroller__wrapper'>
      <div className='container' ref={containerRef}/>
      <div className={inheritPropClassName(rest, 'container_scroller')} ref={scrollerRef}>
        <div style={{minWidth: containerOffset, minHeight: 1}} />
        {children}
        <div style={{minWidth: containerOffset, minHeight: 1}} />
      </div>
      {!['left', 'both'].includes(pinned) && (
        <button className={concatClassModifiers('container_scroller__button', 'left')} style={{width: containerOffset, minHeight: 1}} onClick={scrollContainer()}>
          <Icon icon='angle-left' size='3x' />
        </button>
      )}
      {!['right', 'both'].includes(pinned) && (
        <button className={concatClassModifiers('container_scroller__button', 'right')} style={{width: containerOffset, minHeight: 1}} onClick={scrollContainer(true)}>
          <Icon icon='angle-right' size='3x' />
        </button>
      )}
    </div>
  )
}

export default ContainerScroller
