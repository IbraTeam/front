import { useSearchParams } from 'react-router-dom'
import { MultiValue } from 'react-select'
import { getRequestConfig, postRequestRequestIdConfig, requestInstance } from '@/shared/api'
import { PairNumberOption, StatusOption, TypeBookingOption } from '@/shared/const'
import {
  convertDateToBackendFormat,
  convertDateToFrontendFormat,
  getStartOfNextWeek,
  getStartOfPreviousWeek,
  getStartOfWeek,
  toastOnSuccessRequest
} from '@/shared/lib/helpers'
import { useRequest } from '@/shared/lib/hooks'

export const useRequestsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const weekStart = searchParams.get('weekStart')
  const pairNumbers = searchParams.getAll('pairNumber')
  const statuses = searchParams.getAll('status')
  const bookingTypes = searchParams.getAll('type')

  const {
    isLoading: requestsLoading,
    data: requests,
    requestHandler: getRequestsHandler
  } = useRequest<TableDTO>({
    onMount: true,
    config: getRequestConfig(searchParams.toString()),
    instance: requestInstance,
    onSuccess: (data) => {
      searchParams.set('weekStart', convertDateToFrontendFormat(data.weekStart))
      setSearchParams(searchParams)
    }
  })

  const { isLoading: changeRequestLoading, requestHandler: changeRequestHandler } = useRequest<
    never,
    AcceptOrCancelRequestDTO
  >({
    onSuccess: () => toastOnSuccessRequest('Операция по заявке совершена успешно'),
    instance: requestInstance
  })

  const invalidateRequests = () => {
    const params = new URLSearchParams(searchParams.toString())

    for (const [key, value] of params.entries()) {
      if (key === 'weekStart') {
        const startOfWeek = convertDateToBackendFormat(value)
        params.delete(key)
        params.append(key, startOfWeek)
      }
    }

    const updatedQueryString = params.toString()
    getRequestsHandler(getRequestConfig(updatedQueryString))
  }

  const onAcceptRequestClick = (id: string) => {
    changeRequestHandler(postRequestRequestIdConfig(id, true))
    invalidateRequests()
  }

  const onRejectRequestClick = (id: string) => {
    changeRequestHandler(postRequestRequestIdConfig(id, false))
    invalidateRequests()
  }

  const onWeekStartChange = (newWeekStart: string) => {
    const startOfWeek = getStartOfWeek(newWeekStart)

    searchParams.set('weekStart', startOfWeek)
    setSearchParams(searchParams)

    invalidateRequests()
  }

  const onPairNumbersChange = (selectedPairNumbers: MultiValue<PairNumberOption>) => {
    searchParams.delete('pairNumber')

    selectedPairNumbers.forEach((pairNumber) => {
      searchParams.append('pairNumber', pairNumber.value)
    })

    setSearchParams(searchParams)

    invalidateRequests()
  }

  const onStatusesChange = (selectedStatuses: MultiValue<StatusOption>) => {
    searchParams.delete('status')

    selectedStatuses.forEach((status) => {
      searchParams.append('status', status.value)
    })

    setSearchParams(searchParams)

    invalidateRequests()
  }

  const onTypesChange = (selectedTypes: MultiValue<TypeBookingOption>) => {
    searchParams.delete('type')

    selectedTypes.forEach((type) => {
      searchParams.append('type', type.value)
    })

    setSearchParams(searchParams)

    invalidateRequests()
  }

  const onNextWeekClick = () => {
    if (!weekStart) return

    const startOfNextWeek = getStartOfNextWeek(weekStart)

    searchParams.set('weekStart', startOfNextWeek)
    setSearchParams(searchParams)

    invalidateRequests()
  }

  const onPreviousWeekClick = () => {
    if (!weekStart) return

    const startOfPreviousWeek = getStartOfPreviousWeek(weekStart)

    searchParams.set('weekStart', startOfPreviousWeek)
    setSearchParams(searchParams)

    invalidateRequests()
  }

  return {
    onPreviousWeekClick,
    onNextWeekClick,
    requestsLoading,
    requests,
    onAcceptRequestClick,
    onRejectRequestClick,
    changeRequestLoading,
    weekStart,
    pairNumbers,
    statuses,
    bookingTypes,
    onStatusesChange,
    onTypesChange,
    onWeekStartChange,
    onPairNumbersChange
  }
}
