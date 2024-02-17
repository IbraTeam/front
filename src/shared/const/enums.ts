export enum RoleEnum {
  ADMIN = 'Админ',
  USER = 'Пользователь',
  STUDENT = 'Студент',
  TEACHER = 'Преподаватель',
  DEAN = 'Деканат'
}

export const roleOptions: RoleOption[] = [
  { label: RoleEnum.ADMIN, value: ' ADMIN' },
  { label: RoleEnum.TEACHER, value: 'TEACHER' },
  { label: RoleEnum.STUDENT, value: 'STUDENT' },
  { label: RoleEnum.DEAN, value: 'DEAN' },
  { label: RoleEnum.USER, value: 'USER' }
]

export interface RoleOption {
  label: RoleEnum
  value: string
}
