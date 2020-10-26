import getFromLocalStorage from '../../helpers/getFromLocalStorage.js'
import generateId from '../../helpers/generateId.js'
import saveToLocalStorage from '../../helpers/saveToLocalStorage.js'
import avatars from './avatars.js'
import i18next from 'i18next'

const lsName = 'users'

i18next.addResourceBundle('en', 'usersLocalDb', {
  'This name is taken': 'This name is taken',
  'Wrong login or password': 'Wrong login or password',
  'User not found': 'User not found',
});
i18next.addResourceBundle('ru', 'usersLocalDb', {
  'This name is taken': 'Этот логин уже используется',
  'Wrong login or password': 'Введен неверный логин или пароль',
  'User not found': 'Пользователь не найден',
});
i18next.addResourceBundle('kk', 'usersLocalDb', {
  'This name is taken': 'Бұл пайдаланушы аты қолданыста',
  'Wrong login or password': 'Пайдаланушы аты немесе құпия сөз қате енгізілген',
  'User not found': 'Пайдаланушы табылмады',
});


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
      rej(new Error(i18next.t('usersLocalDb:This name is taken')))
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
    rej(new Error(i18next.t('usersLocalDb:Wrong login or password')))
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
    rej(new Error(i18next.t('usersLocalDb:User not found')))
  })
}
