import Select from 'react-select'
import { InputBlock, Pagination, SearchLoader } from '@/shared/components'
import { RoleEnum, RoleEnumType, RoleOption, roleOptions, selectStyles } from '@/shared/const'
import { Typography } from '@/shared/uikit'
import { UserCard } from './components/UserCard/UserCard'
import { useUsersPage } from './useUsersPage'
import styles from './UsersPage.module.css'

export const UsersPage = () => {
  const {
    users,
    usersLoading,
    onAddRoleClick,
    onRemoveRoleClick,
    roles,
    onRolesChange,
    onNameFilterChange,
    nameFilter,
    onPageChange
  } = useUsersPage()

  return (
    <div className={styles.wrapper}>
      <Typography variant="h1" tag="h1">
        Пользователи
      </Typography>

      <InputBlock
        defaultValue={nameFilter ?? ''}
        label="Поиск по ФИО"
        placeholder="Введите часть ФИО..."
        onChange={(event) => onNameFilterChange(event.currentTarget.value)}
      />

      <Select
        options={roleOptions}
        isSearchable={false}
        isMulti
        value={roles.map((category: string) => ({
          label: RoleEnum[category as RoleEnumType] || '',
          value: category
        }))}
        placeholder="Выберите роли..."
        onChange={onRolesChange}
        styles={selectStyles<RoleOption, true>()}
      />

      {usersLoading && <SearchLoader />}
      <div className={styles.cards}>
        {users?.users?.map((user, index) => (
          <UserCard
            key={index}
            user={user}
            onAddRoleClick={onAddRoleClick}
            onRemoveRoleClick={onRemoveRoleClick}
          />
        ))}
      </div>
      {!!users && users.page.totalPages > 1 && (
        <Pagination pagination={users.page} onPageChange={onPageChange} />
      )}
    </div>
  )
}
