import React from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { postLoginConfig } from '@/shared/api'
import { routes } from '@/shared/const'
import { useUserContext, useUserSwitcherContext } from '@/shared/lib/contexts'
import { toastOnErrorRequest } from '@/shared/lib/helpers'
import { useRequest } from '@/shared/lib/hooks'

export const useLoginPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    setError
  } = useForm<LoginCredentials>()

  const { login } = useUserSwitcherContext()
  const { isAuth } = useUserContext()

  const { isLoading, requestHandler } = useRequest<TokenResponse, LoginCredentials>({
    onSuccess: async (tokenResponse) => {
      login({ email: watch('email'), token: tokenResponse.token, role: 'DEAN' })
    },
    onError: (error) => {
      toastOnErrorRequest(error || 'Ошибка входа в аккаунт')
    },
    onFormError: (errors) =>
      errors.forEach((error) => {
        setError(error.field, { message: error.message })
      })
  })

  React.useEffect(() => {
    if (!isAuth) return

    if (!!location.state?.from) {
      navigate(location.state.from)
    } else {
      navigate(routes.keys())
    }
  }, [isAuth])

  const onSubmit = handleSubmit(async (userInfo) => {
    requestHandler(postLoginConfig(userInfo))
  })

  return { onSubmit, register, errors, isLoading }
}
