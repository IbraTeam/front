export {}

declare global {
  type Role = 'TEACHER' | 'STUDENT' | 'DEAN' | 'ADMIN' | 'USER'
  type KeyStatus = 'IN_DEAN' | 'ON_HANDS' | 'TRANSFERRING' | 'OFFERING_TO_YOU'
  type Status = 'Accepted' | 'Rejected' | 'Pending'
  // type PairNumber =
  //   | 'First'
  //   | 'Second'
  //   | 'Third'
  //   | 'Fourth'
  //   | 'Fifth'
  //   | 'Sixth'
  //   | 'Seventh'
  //   | 'Eighth'
  //   | 'Ninth'
  //   | 'Ten'

  type PairNumber = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

  interface BaseResponse {
    message: string
    status: number
  }

  interface TokenResponse {
    token: string
  }

  interface FormErrorResponse<T> {
    errors: Record<keyof T, string[]>
  }

  export interface FormError<T> {
    field: keyof T
    message: string
  }

  interface LoginCredentials {
    email: string
    password: string
  }

  interface UserRegisterModel {
    name: string
    email: string
    password: string
  }

  interface CreateAudienceKeyDto {
    room: string
  }

  interface CreateAudienceKeyResponse {
    id: string
    room: string
  }

  interface UserEditModel extends Partial<UserRegisterModel> {}

  interface UserDto {
    id: string
    name: string
    email: string
    role: Role
  }

  interface KeyDto {
    keyId: string
    room: string
    dateTime: string
    pairNumber: string
    transferStatus: KeyStatus
    userName: string
  }

  interface RoleRequest {
    role: Role
  }

  type TypeBooking = 'Booking' | 'Pair'

  interface PageResponse {
    totalPages: number
    currentPage: number
    pageSize: number
    totalElements: number
  }

  interface UsersResponse {
    users: UserDto[]
    page: PageResponse
  }

  interface RequestDTO {
    id: string
    name: string
    pairName: string
    status: Status
    dateTime: Date
    dayNumb: number
    typeBooking: TypeBooking
    pairNumber: number
    keyId: string
    user: {
      id: string
      name: string
      email: string
      role: Role
    }
  }

  interface TableDTO {
    requests: RequestDTO[]
    WeekStart: Date
    WeekEnd: Date
  }
}
