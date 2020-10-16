import React from 'react'
import Header from '../components/Header.js'
import useLayoutClass from '../hooks/useLayoutClass.js'

function HomeLayout({ stickyTransparent, children }) {
  useLayoutClass('home_layout')
  return (
    <>
      <Header stickyTransparent={stickyTransparent} />
      {children}
      <footer />
    </>
  )
}

export default HomeLayout
