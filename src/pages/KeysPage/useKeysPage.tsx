import { useForm } from 'react-hook-form'
import { deleteAudienceKeyConfig, getAudienceKeyGetAllConfig, postAudienceKeyConfig } from '@/shared/api'
import { toastOnErrorRequest, toastOnSuccessRequest } from '@/shared/lib/helpers'
import { useRequest } from '@/shared/lib/hooks'

export const useKeysPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset
  } = useForm<CreateAudienceKeyDto>()

  const {
    isLoading: keysLoading,
    data: keys,
    requestHandler: getKeysHandler
  } = useRequest<KeyDto[]>({
    onMount: true,
    config: getAudienceKeyGetAllConfig()
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
    await createKeyHandler(postAudienceKeyConfig(data))
    reset({ room: '' })
    getKeysHandler(getAudienceKeyGetAllConfig())
  })

  const onRemoveKeyClick = async (keyId: string) => {
    await removeKeyHandler(deleteAudienceKeyConfig(keyId))
    getKeysHandler(getAudienceKeyGetAllConfig())
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
