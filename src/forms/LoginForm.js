import { Button, ButtonToolbar, ControlLabel, Form, FormControl, FormGroup, Message, Schema } from 'rsuite'
import React, { useRef, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { getUserIdByCredentials } from '../localServer/localDatabase/users.js'
import { login, useAuthDispatch } from '../providers/AuthProvider'

const { StringType } = Schema.Types;
const model =  Schema.Model({
  name: StringType()
    .isRequired('Это обязательное поле')
  ,
  password: StringType()
    .isRequired('Это обязательное поле')
})


function LoginForm() {
  const history =  useHistory()
  const location = useLocation()
  const dispatch = useAuthDispatch();
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
      <h3 className='mb-4'>Авторизация</h3>
      <FormGroup>
        <ControlLabel>Логин</ControlLabel>
        <FormControl name="name" />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Пароль</ControlLabel>
        <FormControl name="password" type="password" />
      </FormGroup>
      {error && (
        <FormGroup>
          <Message type="error" description={error.message} />
        </FormGroup>
      )}
      <FormGroup>
        <ButtonToolbar className='d-flex'>
          <Button onClick={onCancel}>Назад</Button>
          <Button type='submit' className='ml-auto' appearance="primary">Войти</Button>
        </ButtonToolbar>
      </FormGroup>
      <span>Нет аккаунта?</span> <Link className='hint' to={{pathname: '/register', state: location.state}}>Создать аккаунт</Link>
    </Form>
  )
}

export default LoginForm
