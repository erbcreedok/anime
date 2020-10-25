import React from 'react'
import { Modal } from 'rsuite'
import { useHistory } from 'react-router'
import RegisterForm from '../forms/RegisterForm.js'

function RegisterModalPage() {
  const history = useHistory()

  function goBack() {
    history.goBack()
  }

  return (
    <Modal size='xs' show onHide={goBack} className='rsuite_dark_theme' backdrop backdropClassName='hard_backdrop'>
      <RegisterForm />
    </Modal>
  )
}

export default RegisterModalPage
