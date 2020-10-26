import { Button, ButtonToolbar, ControlLabel, Form, FormControl, FormGroup, Message, Schema } from 'rsuite'
import React, { useRef, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { addUser, checkUserNameAvailability } from '../localServer/localDatabase/users.js'
import { login, useAuthDispatch } from '../providers/AuthProvider'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

const { StringType } = Schema.Types;
const model =  Schema.Model({
  name: StringType()
    .isRequired(i18next.t('validator:isRequired'))
    .addRule(checkUserNameAvailability, i18next.t('validator:that name is already taken'))
  ,
  password: StringType()
    .isRequired(i18next.t('validator:isRequired'))
    .minLength(8, i18next.t('validator:minRequired', {count: 8}))
  ,
  cpassword: StringType()
    .addRule((value, data) => value === data.password, 'validator:passwords doesnt match')
    .isRequired(i18next.t('validator:isRequired'))
})

function RegisterForm() {
  const history =  useHistory()
  const location = useLocation()
  const dispatch = useAuthDispatch()
  const { t } = useTranslation('signin')
  const { from } = location.state || { from: { pathname: "/" } };
  const form = useRef()
  const [fields, setFields] = useState({
    name: '',
    password: '',
    cpassword: '',
  })
  const [error, setError] = useState(null)


  function onCancel() {
    history.replace(from);
  }
  function handleSubmit() {
    setError(null)
    form.current.checkAsync().then((res) => {
      if (!res.hasError) {
        const user = {
          name: fields.name,
          password: fields.password,
        }
        addUser(user).then((token) => {
          login(dispatch, token)
          history.replace(from);
        }).catch(setError)
      }
    })
  }

  return (
    <Form className='login_form'
          onSubmit={handleSubmit}
          model={model}
          formValue={fields}
          onChange={setFields}
          ref={form}
          checkTrigger='blur'
          fluid
    >
      <h3 className='mb-4'>{t('registration')}</h3>
      <FormGroup>
        <ControlLabel>{t('login')}</ControlLabel>
        <FormControl name="name" />
      </FormGroup>
      <FormGroup>
        <ControlLabel>{t('password')}</ControlLabel>
        <FormControl name="password" type="password" />
      </FormGroup>
      <FormGroup>
        <ControlLabel>{t('cpassword')}</ControlLabel>
        <FormControl name="cpassword" type="password" />
      </FormGroup>
      {error && (
        <FormGroup>
          <Message type="error" description={error.message} />
        </FormGroup>
      )}
      <FormGroup>
        <ButtonToolbar className='d-flex'>
          <Button onClick={onCancel}>{t('back')}</Button>
          <Button type='submit' className='ml-auto' appearance="primary">{t('create')}</Button>
        </ButtonToolbar>
      </FormGroup>
      <span>{t('already have an account?')}</span> <Link className='default' to={{pathname: '/login', state: location.state}}>{t('signin to account')}</Link>
    </Form>
  )
}

export default RegisterForm
