import React from 'react'
import Header from '../components/Header.js'
import useLayoutClass from '../hooks/useLayoutClass.js'

function FullScreenLayout({ withHeader,  children }) {
  useLayoutClass('full_screen_layout')
  return (
    <div className='full_screen_layout__wrapper'>
      {withHeader && <Header />}
      <div className="full_screen_layout__content">
        {children}
      </div>
    </div>
  )
}

export default FullScreenLayout
