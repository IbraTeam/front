import { SearchLoader } from '@/shared/components'
import { Typography } from '@/shared/uikit'
import { UserCard } from './components/UserCard/UserCard'
import { useUsersPage } from './useUsersPage'
import styles from './UsersPage.module.css'

export const UsersPage = () => {
  const { users, usersLoading, onAddRoleClick, onRemoveRoleClick } = useUsersPage()

  return (
    <div className={styles.wrapper}>
      <Typography variant="h1" tag="h1">
        Пользователи
      </Typography>

      {usersLoading && <SearchLoader />}
      <div className={styles.cards}>
        {users?.map((user, index) => (
          <UserCard
            key={index}
            user={user}
            onAddRoleClick={onAddRoleClick}
            onRemoveRoleClick={onRemoveRoleClick}
          />
        ))}
      </div>
    </div>
  )
}
