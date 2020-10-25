import React from 'react'
import FullScreenLayout from '../layouts/FullScreenLayout.js'
import LoginForm from '../forms/LoginForm.js'
import bg from '../assets/images/blurbg.jpg'

function LoginPage() {
  return (
    <FullScreenLayout withHeader>
      <div className='login_page'>
        <img src={bg} alt="" className='login_page__bg'/>
        <div className="login_form__wrapper rsuite_default_theme">
          <LoginForm />
        </div>
      </div>
    </FullScreenLayout>
  )
}

export default LoginPage
