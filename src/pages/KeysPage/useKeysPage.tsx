import { useForm } from 'react-hook-form'
import { deleteAudienceKeyConfig, getAudienceKeyConfig, postAudienceKeyConfig } from '@/shared/api'
import { toastOnErrorRequest, toastOnSuccessRequest } from '@/shared/lib/helpers'
import { useRequest } from '@/shared/lib/hooks'

export const useKeysPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<CreateAudienceKeyDto>()

  const { isLoading: keysLoading, data: keys } = useRequest<KeyDto[]>({
    onMount: true,
    config: getAudienceKeyConfig()
  })

  const { isLoading: createKeyLoading, requestHandler: createKeyHandler } = useRequest<
    CreateAudienceKeyResponse,
    CreateAudienceKeyDto
  >({
    onSuccess: () => toastOnSuccessRequest('Ключ создан'),
    onError: () => toastOnErrorRequest('Ошибка создания ключа')
  })

  const { isLoading: removeKeyLoading, requestHandler: removeKeyHandler } = useRequest({
    onSuccess: () => toastOnSuccessRequest('Ключ удален'),
    onError: () => toastOnErrorRequest('Ошибка удаления ключа')
  })

  const onSubmit = handleSubmit(async (data) => {
    createKeyHandler(postAudienceKeyConfig(data))
  })

  const onRemoveKeyClick = async (keyId: string) => {
    await removeKeyHandler(deleteAudienceKeyConfig(keyId))
  }

  return {
    keys,
    keysLoading,
    onSubmit,
    errors,
    register,
    createKeyLoading,
    removeKeyLoading,
    onRemoveKeyClick
  }
}
