import { Button, Typography } from '@/shared/uikit'
import styles from './UserCard.module.css'

interface UserCardProps {
  user: UserDto
  onAddRoleClick: (id: string, role: Role) => void
  onRemoveRoleClick: (id: string, role: Role) => void
}

export const UserCard = ({ user, onAddRoleClick, onRemoveRoleClick }: UserCardProps) => (
  <div className={styles.wrapper}>
    <Typography variant="t1">Имя: {user.name}</Typography>
    <Typography variant="t1">Почта: {user.email}</Typography>
    <Typography variant="t1">Роль: {user.role}</Typography>

    <div className={styles.buttons}>
      {user.role === 'DEAN' ||
        (user.role === 'ADMIN' && <Typography variant="t2">Доступных действий нет</Typography>)}

      {user.role !== 'STUDENT' && user.role !== 'DEAN' && user.role !== 'ADMIN' && (
        <Button
          className={styles.button}
          styleType="solid"
          alertType="success"
          onClick={() => onAddRoleClick(user.id, 'STUDENT')}
        >
          Выдать роль студента
        </Button>
      )}
      {user.role !== 'TEACHER' && user.role !== 'DEAN' && user.role !== 'ADMIN' && (
        <Button
          className={styles.button}
          styleType="solid"
          alertType="success"
          onClick={() => onAddRoleClick(user.id, 'TEACHER')}
        >
          Выдать роль преподавателя
        </Button>
      )}

      {user.role === 'STUDENT' && (
        <Button
          className={styles.button}
          styleType="solid"
          alertType="danger"
          onClick={() => onRemoveRoleClick(user.id, 'STUDENT')}
        >
          Удалить роль студента
        </Button>
      )}
      {user.role === 'TEACHER' && (
        <Button
          className={styles.button}
          styleType="solid"
          alertType="danger"
          onClick={() => onRemoveRoleClick(user.id, 'TEACHER')}
        >
          Удалить роль преподавателя
        </Button>
      )}
    </div>
  </div>
)
