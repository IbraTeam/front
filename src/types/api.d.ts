export {}

declare global {
  type Role = 'TEACHER' | 'STUDENT' | 'DEAN' | 'ADMIN' | 'USER'
  type KeyStatus = 'IN_DEAN' | 'ON_HANDS' | 'TRANSFERRING' | 'OFFERING_TO_YOU'
  type Status = 'Accepted' | 'Rejected' | 'Pending' | 'Issued'
  type PairNumber =
    | 'First'
    | 'Second'
    | 'Third'
    | 'Fourth'
    | 'Fifth'
    | 'Sixth'
    | 'Seventh'
    | 'Eighth'
    | 'Ninth'
    | 'Ten'

  interface BaseResponse {
    message: string
    status: number
  }

  interface TokenResponse {
    token: string
    role: Role
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
    userName: string
    room: string
    id: string
    transferStatus: KeyStatus
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

  interface ChangeRoleDto {
    role: Role
  }

  interface RequestDTO {
    id: string
    name: string
    pairName: string
    status: Status
    dateTime: string
    dayNumb: number
    typeBooking: TypeBooking
    pairNumber: PairNumber
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
    weekStart: string
    weekEnd: string
  }

  interface AcceptOrCancelRequestDTO {
    accept: boolean
  }

  interface CreatePair {
    dateTime: string
    repeatCount: number
    pairNumber: PairNumber
    teacherId: string
    keyId: string
    pairName: string
  }

  interface VitalKeyDto {
    name: string
    keyId: string
  }
}
