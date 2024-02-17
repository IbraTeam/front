import { useSearchParams } from 'react-router-dom'
import { MultiValue } from 'react-select'
import { useDebounceCallback } from 'usehooks-ts'
import { deleteRoleConfig, getUsersConfig, patchRoleConfig } from '@/shared/api'
import { RoleOption } from '@/shared/const'
import { toastOnErrorRequest, toastOnSuccessRequest } from '@/shared/lib/helpers'
import { useRequest } from '@/shared/lib/hooks'

export const useUsersPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    roles: [],
    name: ''
  })

  const roles = searchParams.getAll('roles')
  const nameFilter = searchParams.get('name')

  const {
    isLoading: usersLoading,
    data: users,
    requestHandler: getUsersHandler
  } = useRequest<UserDto[]>({
    onMount: true,
    config: getUsersConfig(roles, nameFilter)
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

  const onNameFilterChange = useDebounceCallback((value: string) => {
    searchParams.set('name', value)
    setSearchParams(searchParams)

    getUsersHandler(getUsersConfig(roles, value))
  }, 300)

  const onRolesChange = (selectedRoles: MultiValue<RoleOption>) => {
    if (!selectedRoles) return

    searchParams.delete('roles')
    selectedRoles.forEach((role) => {
      searchParams.append('roles', role.value)
    })

    setSearchParams(searchParams)

    getUsersHandler(getUsersConfig(roles, nameFilter))
  }

  return {
    onNameFilterChange,
    onRolesChange,
    roles,
    nameFilter,
    usersLoading,
    users,
    addRoleLoading,
    removeRoleLoading,
    onAddRoleClick,
    onRemoveRoleClick
  }
}
