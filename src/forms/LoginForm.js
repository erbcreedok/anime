import { Button, ButtonToolbar, ControlLabel, Form, FormControl, FormGroup, Message, Schema } from 'rsuite'
import React, { useRef, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { getUserIdByCredentials } from '../localServer/localDatabase/users.js'
import { login, useAuthDispatch } from '../providers/AuthProvider'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

const { StringType } = Schema.Types;
const model =  Schema.Model({
  name: StringType()
    .isRequired(i18next.t('validator:isRequired'))
  ,
  password: StringType()
    .isRequired(i18next.t('validator:isRequired'))
})


function LoginForm() {
  const history =  useHistory()
  const location = useLocation()
  const dispatch = useAuthDispatch();
  const { t } = useTranslation('signin')
  const { from } = location.state || { from: { pathname: "/" } };
  const form = useRef()
  const [fields, setFields] = useState({
    name: '',
    password: '',
  })
  const [error, setError] = useState(null)

  function onCancel() {
    history.replace(from);
  }

  function handleSubmit() {
    setError(null)
    form.current.checkAsync().then((result) => {
      if (!result.hasError) {
        getUserIdByCredentials(fields.name, fields.password).then((token) => {
          login(dispatch, token)
          history.replace(from);
        }).catch(setError)
      }
    })
  }

  return (
    <Form className='login_form' fluid ref={form} onSubmit={handleSubmit} model={model} onChange={setFields}>
      <h3 className='mb-4'>{t('authorization')}</h3>
      <FormGroup>
        <ControlLabel>{t('login')}</ControlLabel>
        <FormControl name="name" />
      </FormGroup>
      <FormGroup>
        <ControlLabel>{t('password')}</ControlLabel>
        <FormControl name="password" type="password" />
      </FormGroup>
      {error && (
        <FormGroup>
          <Message type="error" description={error.message} />
        </FormGroup>
      )}
      <FormGroup>
        <ButtonToolbar className='d-flex'>
          <Button onClick={onCancel}>{t('back')}</Button>
          <Button type='submit' className='ml-auto' appearance="primary">{t('signin')}</Button>
        </ButtonToolbar>
      </FormGroup>
      <span>{t('dont have an account?')}</span> <Link className='default' to={{pathname: '/register', state: location.state}}>{t('create account')}</Link>
    </Form>
  )
}

export default LoginForm
