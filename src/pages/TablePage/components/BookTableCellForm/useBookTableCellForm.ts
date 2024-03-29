import React from 'react'
import { useForm } from 'react-hook-form'
import {
  apiInstance,
  getRequestFreeConfig,
  getUsersConfig,
  postRequestCreatePairConfig
} from '@/shared/api'
import {
  convertDateToBackendFormat,
  toastOnErrorRequest,
  toastOnSuccessRequest
} from '@/shared/lib/helpers'
import { useRequest } from '@/shared/lib/hooks'
import { getKeysOptions } from './helpers/getKeysOptions'
import { getTeachersOptions } from './helpers/getTeachersOptions'

export interface UseBookTableCellFormParams {
  dateTime: string
  pairNumber: PairNumber
  onBooked: () => void
}

export type BookTableCellSchema = Omit<CreatePair, 'dateTime' | 'pairNumber'>

export const useBookTableCellForm = ({ dateTime, pairNumber, onBooked }: UseBookTableCellFormParams) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    control
  } = useForm<BookTableCellSchema>()

  const { isLoading: createPairLoading, requestHandler: createPairHandler } = useRequest<
    BaseResponse,
    CreatePair
  >({
    onSuccess: () => {
      toastOnSuccessRequest('Пара успешно создана')
      onBooked()
    },
    onError: (error) => toastOnErrorRequest(error ?? 'Ошибка создания пары'),
    instance: 'vital'
  })

  const {
    isLoading: keysLoading,
    data: keys,
    requestHandler: keysHandler
  } = useRequest<VitalKeyDto[]>({
    onMount: true,
    config: getRequestFreeConfig(
      `bookingTime=${convertDateToBackendFormat(dateTime)}&pairNumber=${pairNumber}&repeatedCount=1`
    ),
    instance: 'vital'
  })

  React.useEffect(() => {
    if (watch('repeatCount')) {
      keysHandler(
        getRequestFreeConfig(
          `bookingTime=${convertDateToBackendFormat(dateTime)}&pairNumber=${pairNumber}&${
            watch('repeatCount') ? `repeatedCount=${watch('repeatCount')}` : ''
          }`
        )
      )
    }
  }, [watch('repeatCount')])

  const keysOptions = React.useMemo(() => (keys ? getKeysOptions(keys) : []), [keys])

  const fetchTeachers = async (inputValue: string) => {
    const response = await apiInstance<UsersResponse>(
      getUsersConfig(`size=40&roles=TEACHER&name=${inputValue}`)
    )

    return getTeachersOptions(response.data.users)
  }

  const onSubmit = handleSubmit(async (value) => {
    createPairHandler(postRequestCreatePairConfig({ ...value, pairNumber, dateTime }))
  })

  return {
    onSubmit,
    register,
    watch,
    errors,
    createPairLoading,
    control,
    fetchTeachers,
    keysOptions,
    keysLoading
  }
}
