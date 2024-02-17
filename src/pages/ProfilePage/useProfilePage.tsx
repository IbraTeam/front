import React from 'react'
import { useForm } from 'react-hook-form'
import { getProfileConfig } from '@/shared/api'
import { useRequest } from '@/shared/lib/hooks'

export const useProfilePage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    reset
  } = useForm<UserEditModel>()

  const {
    data: userInfo,
    isLoading,
    error
  } = useRequest<UserDto>({ onMount: true, config: getProfileConfig() })

  // const {
  //   isLoading: updateProfileLoading,
  //   error: updateProfileError,
  //   requestHandler: updateProfile
  // } = useRequest<Response, UserEditModel>({
  //   onSuccess: () => toastOnSuccessRequest(),
  //   onError: (error) => toastOnErrorRequest(error || 'Ошибка обновления профиля'),
  //   onFormError: (errors) =>
  //     errors.forEach((error) => {
  //       setError(error.field, { message: error.message })
  //     })
  // })

  React.useEffect(() => {
    if (!userInfo) return

    reset({ ...userInfo })
  }, [userInfo])

  const onSubmit = handleSubmit(async () => {
    // updateProfile(putProfileConfig(userInfo))
  })

  return {
    userInfo,
    isLoading,
    error,
    register,
    watch,
    errors,
    onSubmit
  }
}
