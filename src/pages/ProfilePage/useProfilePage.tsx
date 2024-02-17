import React from 'react'
import { useForm } from 'react-hook-form'
import { getProfileConfig, putProfileConfig } from '@/shared/api'
import { useUserContext } from '@/shared/lib/contexts'
import { toastOnErrorRequest, toastOnSuccessRequest } from '@/shared/lib/helpers'
import { useRequest } from '@/shared/lib/hooks'

export const useProfilePage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    reset,
    setError
  } = useForm<UserEditModel>()

  const { user } = useUserContext()

  const {
    data: userInfo,
    isLoading,
    error
  } = useRequest<UserDto>({ onMount: true, config: getProfileConfig({ token: user.token }) })

  const {
    isLoading: updateProfileLoading,
    error: updateProfileError,
    requestHandler: updateProfile
  } = useRequest<Response, UserEditModel>({
    onSuccess: () => toastOnSuccessRequest(),
    onError: (error) => toastOnErrorRequest(error || 'Ошибка обновления профиля'),
    onFormError: (errors) =>
      errors.forEach((error) => {
        setError(error.field, { message: error.message })
      })
  })

  React.useEffect(() => {
    if (!userInfo) return

    reset({ ...userInfo })
  }, [userInfo])

  const onSubmit = handleSubmit(async (userInfo) => {
    updateProfile(putProfileConfig(userInfo, { token: user.token }))
  })

  return {
    updateProfileLoading,
    updateProfileError,
    userInfo,
    isLoading,
    error,
    register,
    watch,
    errors,
    onSubmit
  }
}
