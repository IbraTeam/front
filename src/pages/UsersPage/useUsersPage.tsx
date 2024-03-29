import { useSearchParams } from 'react-router-dom'
import { MultiValue } from 'react-select'
import { useDebounceCallback } from 'usehooks-ts'
import { deleteRoleConfig, getUsersConfig, patchRoleConfig } from '@/shared/api'
import { RoleOption } from '@/shared/const'
import { toastOnErrorRequest, toastOnSuccessRequest } from '@/shared/lib/helpers'
import { useRequest } from '@/shared/lib/hooks'

const NAME_FILTER_DURATION = 400

export const useUsersPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const roles = searchParams.getAll('roles')
  const nameFilter = searchParams.get('name')

  const {
    isLoading: usersLoading,
    data: users,
    requestHandler: getUsersHandler
  } = useRequest<UsersResponse>({
    onMount: true,
    config: getUsersConfig(searchParams.toString())
  })

  const { isLoading: addRoleLoading, requestHandler: addRoleHandler } = useRequest<
    BaseResponse,
    ChangeRoleDto
  >({
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

  const invalidateUsers = () => {
    getUsersHandler(getUsersConfig(searchParams.toString()))
  }

  const onAddRoleClick = async (id: string, role: Role) => {
    await addRoleHandler(patchRoleConfig(id, { role }))
    invalidateUsers()
  }

  const onRemoveRoleClick = async (id: string, role: Role) => {
    await removeRoleHandler(deleteRoleConfig(id, { role }))
    invalidateUsers()
  }

  const onNameFilterChange = useDebounceCallback((value: string) => {
    if (!value.length) searchParams.delete('name')
    else searchParams.set('name', value)

    setSearchParams(searchParams)

    invalidateUsers()
  }, NAME_FILTER_DURATION)

  const onRolesChange = (selectedRoles: MultiValue<RoleOption>) => {
    searchParams.delete('roles')

    selectedRoles.forEach((role) => {
      searchParams.append('roles', role.value)
    })

    setSearchParams(searchParams)

    invalidateUsers()
  }

  const onPageChange = (page: number) => {
    searchParams.set('page', String(page))
    setSearchParams(searchParams)

    invalidateUsers()
  }

  return {
    onPageChange,
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
