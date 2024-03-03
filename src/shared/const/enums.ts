export enum KeyStatusEnum {
  IN_DEAN = 'В деканате',
  ON_HANDS = 'На руках',
  TRANSFERRING = 'Передается',
  OFFERING_TO_YOU = 'Передается вам'
}

export type RoleEnumType = 'USER' | 'STUDENT' | 'TEACHER' | 'DEAN'

export enum RoleEnum {
  USER = 'Пользователь',
  STUDENT = 'Студент',
  TEACHER = 'Преподаватель',
  DEAN = 'Деканат'
}

export const roleOptions: RoleOption[] = [
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
  value: string | null
}

export enum StatusEnum {
  Pending = 'Ожидает',
  Accepted = 'Принят',
  Rejected = 'Отклонен',
  Issued = 'Закрыт'
}

export const statusOptions: StatusOption[] = [
  { label: StatusEnum.Pending, value: 'Pending' },
  { label: StatusEnum.Accepted, value: 'Accepted' },
  { label: StatusEnum.Rejected, value: 'Rejected' },
  { label: StatusEnum.Issued, value: 'Issued' }
]

export interface StatusOption {
  label: StatusEnum
  value: string
}

export enum PairNumberEnum {
  First = 'Первая',
  Second = 'Вторая',
  Third = 'Третья',
  Fourth = 'Четвертая',
  Fifth = 'Пятая',
  Sixth = 'Шестая',
  Seventh = 'Седьмая',
  Eighth = 'Восьмая',
  Ninth = 'Девятая',
  Ten = 'Десятая'
}

export const pairNumberOptions: PairNumberOption[] = [
  { label: PairNumberEnum.First, value: 'First' },
  { label: PairNumberEnum.Second, value: 'Second' },
  { label: PairNumberEnum.Third, value: 'Third' },
  { label: PairNumberEnum.Fourth, value: 'Fourth' },
  { label: PairNumberEnum.Fifth, value: 'Fifth' },
  { label: PairNumberEnum.Sixth, value: 'Sixth' },
  { label: PairNumberEnum.Seventh, value: 'Seventh' },
  { label: PairNumberEnum.Eighth, value: 'Eighth' },
  { label: PairNumberEnum.Ninth, value: 'Ninth' },
  { label: PairNumberEnum.Ten, value: 'Ten' }
]

export interface PairNumberOption {
  label: PairNumberEnum
  value: string
}

export const PairNumberTime = {
  First: '8:45-10:20',
  Second: '10:30-12:05',
  Third: '12:15-13:50',
  Fourth: '14:00-15:35',
  Fifth: '15:45-17:20',
  Sixth: '17:30-19:05',
  Seventh: '19:15-20:50',
  Eighth: '20:55-22:30'
} as const

export const DayNumber: Record<number, string> = {
  0: 'Понедельник',
  1: 'Вторник',
  2: 'Среда',
  3: 'Четверг',
  4: 'Пятница',
  5: 'Суббота',
  6: 'Воскресенье'
}
