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

export enum TypeBookingEnum {
  Booking = 'Бронирование',
  Pair = 'Пара'
}

export const typeBookingOptions: TypeBookingOption[] = [
  { label: TypeBookingEnum.Booking, value: 'Booking' },
  { label: TypeBookingEnum.Pair, value: 'Pair' }
]

export interface TypeBookingOption {
  label: TypeBookingEnum
  value: string
}

export enum StatusEnum {
  Pending = 'Ожидает',
  Accepted = 'Принят',
  Rejected = 'Отклонен'
}

export const statusOptions: StatusOption[] = [
  { label: StatusEnum.Pending, value: 'Pending' },
  { label: StatusEnum.Accepted, value: 'Accepted' },
  { label: StatusEnum.Rejected, value: 'Rejected' }
]

export interface StatusOption {
  label: StatusEnum
  value: string
}

export enum PairNumberEnum {
  Zero = '1',
  One = '2',
  Two = '3',
  Three = '4',
  Four = '5',
  Five = '6',
  Six = '7',
  Seven = '8',
  Eight = '9',
  Nine = '10'
}

export const pairNumberOptions: PairNumberOption[] = [
  { label: PairNumberEnum.Zero, value: '1' },
  { label: PairNumberEnum.One, value: '2' },
  { label: PairNumberEnum.Two, value: '3' },
  { label: PairNumberEnum.Three, value: '4' },
  { label: PairNumberEnum.Four, value: '5' },
  { label: PairNumberEnum.Five, value: '6' },
  { label: PairNumberEnum.Six, value: '7' },
  { label: PairNumberEnum.Seven, value: '8' },
  { label: PairNumberEnum.Eight, value: '9' },
  { label: PairNumberEnum.Nine, value: '10' }
]

export interface PairNumberOption {
  label: string
  value: string
}
