import React, { createContext, useContext, useEffect, useState } from 'react'
import { useAuthState } from '../AuthProvider'
import { getUserById } from '../../localServer/localDatabase/users.js'

const UserContext = createContext()

export function useUserState() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider');
  }

  return context;
}


function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const { token } = useAuthState()
  useEffect(() => {
    if (token) {
      getUserById(token).then(setUser)
    } else {
      setUser(null)
    }
  }, [token])

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
