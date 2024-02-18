import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { IS_AUTH_KEY, routes, USER_INFO_KEY } from '@/shared/const'
import { UserContext, type UserContextInfo } from '@/shared/lib/contexts'
import { useLocalStorage } from '@/shared/lib/hooks'

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const { value: isAuth, setValue: setIsAuth } = useLocalStorage(IS_AUTH_KEY, false)
  const { value: user, setValue: setUser } = useLocalStorage<UserContextInfo>(USER_INFO_KEY, {
    token: '',
    email: '',
    role: 'USER'
  })

  const login = (userInfo: UserContextInfo) => {
    setIsAuth(true)
    setUser({ ...userInfo })
  }

  const logout = () => {
    setIsAuth(false)
    setUser({
      token: '',
      email: '',
      role: 'USER'
    })
    navigate(routes.login(), { state: { from: location }, replace: true })
  }

  return <UserContext.Provider value={{ isAuth, user, login, logout }}>{children}</UserContext.Provider>
}
