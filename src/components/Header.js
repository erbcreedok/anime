import React, { useCallback, useEffect, useMemo, useState } from 'react'
import inheritPropClassName from '../helpers/inheritPropClassName.js'
import { Avatar, Button, ButtonToolbar, Drawer, Dropdown, Icon, IconButton, Nav } from 'rsuite'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/images/naruto.svg'
import { useUserState } from '../providers/UserProvider'
import { logout, useAuthDispatch } from '../providers/AuthProvider'
import { useTranslation } from 'react-i18next'
import locales from '../configs/locales.js'
import reloadWindow from '../methods/reloadWindow.js'

function Header({ stickyTransparent, ...props }) {
  const { t, i18n } = useTranslation('translation');
  const [isTransparent, setTransparent] = useState(false)
  const location = useLocation()
  const user = useUserState()
  const dispatch = useAuthDispatch()
  const [showDrawer, setShowDrawer] = useState(false)
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

  const onLogout = useCallback(() => {
    logout(dispatch)
  }, [dispatch])

  const localeName = useMemo(() => locales.find(({code}) => i18n.language === code)?.name, [i18n.language])

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
          <div className="header__desktop header__nav rsuite_dark_theme mx-auto">
            <Nav>
              <Nav.Item componentClass={Link} to='/'>{t('home')}</Nav.Item>
              <Nav.Item componentClass={Link}>{t('categories')}</Nav.Item>
              <Nav.Item componentClass={Link} to='/about'>{t('about')}</Nav.Item>
            </Nav>
          </div>
          <div className='header__desktop header__sign_in ml-4 rsuite_dark_theme'>
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
              {
                !user ? (
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
                      <Icon icon="sign-out" /> {t('logout')}
                    </Dropdown.Item>
                  </Dropdown>
                )
              }
            </ButtonToolbar>
          </div>
          <div className="header__mobile ml-auto">
            <IconButton size='lg' appearance='subtle' icon={<Icon icon='bars' size='lg' />} onClick={() => setShowDrawer(true)} />
          </div>
        </div>

        <Drawer size='xs' backdropClassName='drawer__backdrop-dark' full className='header__drawer rsuite_dark_theme' show={showDrawer} onHide={() => setShowDrawer(false)}>
          <div className="d-flex justify-content-end">
            <IconButton size='lg' icon={<Icon icon='close' />} onClick={() => setShowDrawer(false)} />
          </div>
          <Nav vertical>
            <Nav.Item componentClass={Link} to='/'>{t('home')}</Nav.Item>
            <Nav.Item componentClass={Link}>{t('categories')}</Nav.Item>
            <Nav.Item componentClass={Link} to='/about'>{t('about')}</Nav.Item>
          </Nav>
          <Nav vertical className='mt-5'>
            <Nav.Item><Icon icon='search' /> {t('search')}</Nav.Item>
            <Dropdown title={<><Icon icon='globe2' /> {localeName}</>}>
              {locales.map(({code, name}) => (
                <Dropdown.Item key={code} onClick={() => i18n.changeLanguage(code).then(reloadWindow)}>
                  {name} {i18n.language === code && <Icon icon="check" className='ml-2' />}
                </Dropdown.Item>
              ))}
            </Dropdown>
            {!user && <Nav.Item componentClass={Link} to='/login'><Icon icon="sign-in" /> {t('login')}</Nav.Item>}
            {user && <Nav.Item onClick={onLogout}><Icon icon="sign-out" /> {t('logout')}</Nav.Item>}
          </Nav>
        </Drawer>
      </header>
    </>
  )
}

export default Header
