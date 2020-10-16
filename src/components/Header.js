import React, { useEffect, useState } from 'react'
import inheritPropClassName from '../helpers/inheritPropClassName.js'
import { Button, ButtonToolbar, Icon, IconButton } from 'rsuite'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/naruto.svg'

function Header({ stickyTransparent, ...props }) {
  const [isTransparent, setTransparent] = useState(false)
  useEffect(() => {
    function handleTransparentController() {
      setTransparent(window.scrollY < 10 && stickyTransparent)
    }
    if (stickyTransparent) {
      handleTransparentController()
      window.addEventListener('scroll', handleTransparentController)
      window.addEventListener('resize', handleTransparentController)
    }
    return () => {
      window.removeEventListener('scroll', handleTransparentController)
      window.removeEventListener('resize', handleTransparentController)
    }
  }, [stickyTransparent])


  return (
    <>
      {!stickyTransparent && <div className='header__margin' />}
      <header className={inheritPropClassName(props, 'header', (isTransparent ? 'header-transparent' : ''))}>
        <div className="header__container container">
          <div className="header__sidebar_toggle">
          </div>
          <div className="header__logo">
            <img src={Logo} alt="" className='header__logo_image'/>
            KANDO
          </div>
          <div className="header__search ml-auto">
          </div>
          <div className='header__sign_in ml-4'>
            <ButtonToolbar className='d-flex'>
              <IconButton size='lg' icon={<Icon icon='search' />} appearance='subtle' />
              <Button to='/static' componentClass={Link} size='lg' appearance="subtle">Войти</Button>
            </ButtonToolbar>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
