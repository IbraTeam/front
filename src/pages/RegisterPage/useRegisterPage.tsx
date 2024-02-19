import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { postRegisterConfig } from '@/shared/api'
import { routes } from '@/shared/const'
import { useUserContext, useUserSwitcherContext } from '@/shared/lib/contexts'
import { toastOnErrorRequest } from '@/shared/lib/helpers'
import { useRequest } from '@/shared/lib/hooks'

export const useRegisterPage = () => {
  const navigate = useNavigate()

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    watch,
    setError
  } = useForm<UserRegisterModel>()

  const { isAuth } = useUserContext()
  const { login } = useUserSwitcherContext()

  const {
    isLoading,
    error,
    requestHandler: registration
  } = useRequest<TokenResponse, UserRegisterModel>({
    onSuccess: (tokenResponse) => {
      login({ email: watch('email'), ...tokenResponse })
    },
    onError: (error) => {
      if (!!error) toastOnErrorRequest(error)
    },
    onFormError: (errors) =>
      errors.forEach((error) => {
        setError(error.field, { message: error.message })
      })
  })

  React.useEffect(() => {
    if (!isAuth) return

    navigate(routes.keys())
  }, [isAuth])

  const onSubmit = handleSubmit(async (userInfo) => {
    registration(postRegisterConfig(userInfo))
  })

  return {
    register,
    errors,
    setValue,
    isLoading,
    error,
    watch,
    onSubmit
  }
}
