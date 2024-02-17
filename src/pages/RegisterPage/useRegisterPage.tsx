import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { postRegisterConfig } from '@/shared/api'
import { routes } from '@/shared/const'
import { useUserSwitcherContext } from '@/shared/lib/contexts'
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

  const { login } = useUserSwitcherContext()

  const {
    isLoading,
    error,
    requestHandler: registration
  } = useRequest<TokenResponse, UserRegisterModel>({
    onSuccess: (tokenResponse) => {
      login({ email: watch('email'), token: tokenResponse.token })
      navigate(routes.root())
    },
    onError: (error) => {
      if (!!error) toastOnErrorRequest(error)
    },
    onFormError: (errors) =>
      errors.forEach((error) => {
        setError(error.field, { message: error.message })
      })
  })

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
