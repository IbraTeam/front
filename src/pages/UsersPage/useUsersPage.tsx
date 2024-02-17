import { deleteRoleConfig, getUsersConfig, patchRoleConfig } from '@/shared/api'
import { toastOnErrorRequest, toastOnSuccessRequest } from '@/shared/lib/helpers'
import { useRequest } from '@/shared/lib/hooks'

export const useUsersPage = () => {
  const { isLoading: usersLoading, data: users } = useRequest<UserDto[]>({
    onMount: true,
    config: getUsersConfig()
  })

  const { isLoading: addRoleLoading, requestHandler: addRoleHandler } = useRequest<BaseResponse, Role>({
    onSuccess: (response) => toastOnSuccessRequest(response.message),
    onError: (error) => toastOnErrorRequest(error || 'Ошибка добавления роли')
  })

  const { isLoading: removeRoleLoading, requestHandler: removeRoleHandler } = useRequest<
    BaseResponse,
    RoleRequest
  >({
    onSuccess: (response) => toastOnSuccessRequest(response.message),
    onError: (error) => toastOnErrorRequest(error || 'Ошибка удаления роли')
  })

  const onAddRoleClick = (id: string, role: Role) => {
    addRoleHandler(patchRoleConfig(id, role))
  }

  const onRemoveRoleClick = (id: string, role: Role) => {
    removeRoleHandler(deleteRoleConfig(id, { role }))
  }

  return { usersLoading, users, addRoleLoading, removeRoleLoading, onAddRoleClick, onRemoveRoleClick }
}
