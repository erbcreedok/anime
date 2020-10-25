import React, { useEffect, useState } from 'react'
import inheritPropClassName from '../helpers/inheritPropClassName.js'
import { Avatar, Button, ButtonToolbar, Dropdown, Icon, IconButton } from 'rsuite'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/images/naruto.svg'
import { useUserState } from '../providers/UserProvider'
import { logout, useAuthDispatch } from '../providers/AuthProvider'

function Header({ stickyTransparent, ...props }) {
  const [isTransparent, setTransparent] = useState(false)
  const location = useLocation()
  const user = useUserState()
  const dispatch = useAuthDispatch()
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

  function onLogout() {
    logout(dispatch)
  }


  return (
    <>
      {!stickyTransparent && <div className='header__margin' />}
      <header className={inheritPropClassName(props, 'header', (isTransparent ? 'header-transparent' : ''))}>
        <div className="header__container container">
          <div className="header__sidebar_toggle">
          </div>
          <Link to='/' className="link_inherit header__logo">
            <img src={Logo} alt="" className='header__logo_image'/>
            KANDO
          </Link>
          <div className="header__search ml-auto">
          </div>
          <div className='header__sign_in ml-4'>
            <ButtonToolbar className='d-flex'>
              <IconButton size='lg' icon={<Icon icon='search' />} appearance='subtle' />
              {!user ? (
                <Button to={{pathname: '/login', state: {from: location} }} componentClass={Link} size='lg' appearance="subtle">Войти</Button>
              ) : (
                <Dropdown
                  trigger={['hover', 'click']}
                  placement="bottomEnd"
                  renderTitle={() => (
                    <Avatar
                      circle
                      src={user.avatar}
                    />
                  )}
                >
                  <Dropdown.Item componentClass={Button} onClick={onLogout}>
                    <Icon icon="sign-out" /> Выйти
                  </Dropdown.Item>
                </Dropdown>
              )}
            </ButtonToolbar>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
