import React from 'react'
import LoginForm from '../forms/LoginForm.js'
import { Modal } from 'rsuite'
import { useHistory } from 'react-router'

function LoginPage() {
  const history = useHistory()

  function goBack() {
    history.goBack()
  }

  return (
    <Modal size='xs' show onHide={goBack} className='rsuite_dark_theme' backdrop backdropClassName='hard_backdrop'>
      <LoginForm />
    </Modal>
  )
}

export default LoginPage
