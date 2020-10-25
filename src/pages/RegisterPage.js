import React from 'react'
import FullScreenLayout from '../layouts/FullScreenLayout.js'
import bg from '../assets/images/blurbg.jpg'
import RegisterForm from '../forms/RegisterForm.js'

function RegisterPage() {
  return (
    <FullScreenLayout withHeader>
      <div className='login_page'>
        <img src={bg} alt="" className='login_page__bg'/>
        <div className="login_form__wrapper rsuite_default_theme">
          <RegisterForm />
        </div>
      </div>
    </FullScreenLayout>
  )
}

export default RegisterPage
