import { Button, ButtonToolbar, ControlLabel, Form, FormControl, FormGroup, Message, Schema } from 'rsuite'
import React, { useRef, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { addUser, checkUserNameAvailability } from '../localServer/localDatabase/users.js'
import { login, useAuthDispatch } from '../providers/AuthProvider'

const { StringType } = Schema.Types;
const model =  Schema.Model({
  name: StringType()
    .isRequired('Это обязательное поле')
    .addRule(checkUserNameAvailability, 'Данное имя уже занято')
  ,
  password: StringType()
    .isRequired('Это обязательное поле')
    .minLength(8, 'Минимум 8 символов')
  ,
  cpassword: StringType()
    .addRule((value, data) => value === data.password, 'Пароли не совпадают')
    .isRequired('Это обязательное поле')
})

function RegisterForm() {
  const history =  useHistory()
  const location = useLocation()
  const dispatch = useAuthDispatch()
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
      <h3 className='mb-4'>Регистрация</h3>
      <FormGroup>
        <ControlLabel>Логин</ControlLabel>
        <FormControl checkAsync name="name" />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Пароль</ControlLabel>
        <FormControl name="password" type="password" />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Подтвердите пароль</ControlLabel>
        <FormControl name="cpassword" type="password" />
      </FormGroup>
      {error && (
        <FormGroup>
          <Message type="error" description={error.message} />
        </FormGroup>
      )}
      <FormGroup>
        <ButtonToolbar className='d-flex'>
          <Button onClick={onCancel}>Назад</Button>
          <Button type='submit' className='ml-auto' appearance="primary">Создать</Button>
        </ButtonToolbar>
      </FormGroup>
      <span>Уже имеется аккаунт?</span> <Link className='hint' to={{pathname: '/login', state: location.state}}>Войти в аккаунт</Link>
    </Form>
  )
}

export default RegisterForm
