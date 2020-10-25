import React from 'react'
import Header from '../components/Header.js'
import useLayoutClass from '../hooks/useLayoutClass.js'
import modifyClass from '../helpers/modifyClass.js'

function FullScreenLayout({ withHeader,  children }) {
  useLayoutClass('full_screen_layout')
  return (
    <div className='full_screen_layout__wrapper'>
      {withHeader && <Header />}
      <div className={modifyClass('full_screen_layout__content', {'with_header': withHeader})}>
        {children}
      </div>
    </div>
  )
}

export default FullScreenLayout
