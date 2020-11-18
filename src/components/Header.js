import React, { useEffect, useState } from 'react'
import inheritPropClassName from '../helpers/inheritPropClassName.js'
import { Avatar, Button, ButtonToolbar, Dropdown, Icon, IconButton } from 'rsuite'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/images/naruto.svg'
import { useUserState } from '../providers/UserProvider'
import { logout, useAuthDispatch } from '../providers/AuthProvider'
import { useTranslation } from 'react-i18next'
import locales from '../configs/locales.js'
import reloadWindow from '../methods/reloadWindow.js'
import ResponsiveNav from '@rsuite/responsive-nav'

function Header({ stickyTransparent, ...props }) {
  const { t, i18n } = useTranslation('translation');
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
            <span className="header__logo_text">KANDO</span>
          </Link>
          <div className="header__nav rsuite_dark_theme mx-auto">
              <ResponsiveNav>
                <ResponsiveNav.Item componentClass={Link} to='/'>Главная</ResponsiveNav.Item>
                <ResponsiveNav.Item componentClass={Link}>Категории</ResponsiveNav.Item>
                <ResponsiveNav.Item componentClass={Link} to='/about'>О Нас</ResponsiveNav.Item>
              </ResponsiveNav>
          </div>
          <div className='header__sign_in ml-4 rsuite_dark_theme'>
            <ButtonToolbar className='d-flex'>
              <IconButton size='lg' icon={<Icon icon='search' />} appearance='subtle' />
              <Dropdown
                trigger={['hover', 'click']}
                placement="bottomEnd"
                renderTitle={() => <IconButton size='lg' icon={<Icon icon='globe2' />} appearance='subtle' />}
              >
                {locales.map(({code, name}) => (
                  <Dropdown.Item key={code} onClick={() => i18n.changeLanguage(code).then(reloadWindow)}>
                    {name} {i18n.language === code && <Icon icon="check" className='ml-2' />}
                  </Dropdown.Item>
                ))}
              </Dropdown>
              {!user ? (
                <Button to={{pathname: '/login', state: {from: location} }} componentClass={Link} size='lg' appearance="subtle">{t('login')}</Button>
              ) : (
                <Dropdown
                  trigger={['hover', 'click']}
                  placement="bottomEnd"
                  renderTitle={() => (
                    <Avatar
                      className='ml-1'
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
