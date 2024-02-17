import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { apiInstance } from '@/shared/api'
import { routes, USER_INFO_KEY } from '@/shared/const'
import { useUserContext, useUserSwitcherContext } from '@/shared/lib/contexts'

export const AxiosInterceptor = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isSet, setIsSet] = React.useState(false)

  const { isAuth } = useUserContext()
  const { logout } = useUserSwitcherContext()

  React.useEffect(() => {
    setIsSet(true)
    const successResponseInterceptor = <T, D>(response: AxiosResponse<T, D>) => response

    const errorResponseInterceptor = <T, D>(error: AxiosError<T, D>) => {
      if (error?.response?.status === 401 && isAuth) {
        logout()
        navigate(routes.login(), { state: { from: location }, replace: true })
      }

      return Promise.reject(error)
    }

    const responseInterceptors = apiInstance.interceptors.response.use(
      successResponseInterceptor,
      errorResponseInterceptor
    )

    const errorRequestInterceptor = <T, D>(error: AxiosError<T, D>) => Promise.reject(error)

    const successRequestInterceptor = (config: InternalAxiosRequestConfig) => {
      const userInfo = JSON.parse(localStorage.getItem(USER_INFO_KEY) ?? '')

      if (!!userInfo) config.headers.Authorization = `Bearer ${userInfo.token}`

      return config
    }

    const requestInterceptors = apiInstance.interceptors.request.use(
      successRequestInterceptor,
      errorRequestInterceptor
    )

    return () => {
      apiInstance.interceptors.response.eject(responseInterceptors)
      apiInstance.interceptors.response.eject(requestInterceptors)
    }
  }, [navigate])

  return isSet && children
}
