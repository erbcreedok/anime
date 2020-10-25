import getFromLocalStorage from '../../helpers/getFromLocalStorage.js'
import generateId from '../../helpers/generateId.js'
import saveToLocalStorage from '../../helpers/saveToLocalStorage.js'
import avatars from './avatars.js'

const lsName = 'users'



export function addUser(user) {
  return new Promise((res, rej) => {
    const users = getFromLocalStorage(lsName, [])
    const newUser = {
      ...user,
      name: user.name.toString().toLowerCase().trim(),
      id: user.id || generateId(users.map((u) => u.id)),
      avatarIndex: Math.floor(Math.random() * avatars.length),
    }
    if (users.some((u) => u.name === user.name)) {
      rej(new Error('this name is taken'))
      return
    }
    users.push(newUser)
    saveToLocalStorage(lsName, users)
    res(newUser.id)
  })
}

export function checkUserNameAvailability(name) {
  return new Promise((res) => {
    const users = getFromLocalStorage(lsName, [])
    res(!users.some((u) => u.name === name))
  })
}

export function getUserIdByCredentials(name, password) {
  return new Promise((res, rej) => {
    const checkName = name.toString().trim().toLowerCase()
    const users = getFromLocalStorage(lsName, [])
    const user = users.find((u) => u.name === checkName && u.password === password)
    if (user) {
      res(user.id)
      return
    }
    rej(new Error('Введен неверный логин или пароль'))
  })
}

function normalizeUser(user) {
  return {
    ...user,
    password: undefined,
    avatarIndex: undefined,
    avatar: avatars[user.avatarIndex],
  }
}

export function getUserById(id) {
  return new Promise((res, rej) => {
    const users = getFromLocalStorage(lsName, [])
    const user = users.find((u) => u.id === id)
    if (user) {
      res(normalizeUser(user))
      return
    }
    rej(new Error('Пользователь не найден'))
  })
}
