import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { getRequestApprovedConfig } from '@/shared/api'
import {
  convertDateToBackendFormat,
  convertDateToFrontendFormat,
  getStartOfPreviousWeek
} from '@/shared/lib/helpers'
import { useRequest } from '@/shared/lib/hooks'
import { getTable } from './helpers/getTable'

export const useTablePage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const weekStart = searchParams.get('weekStart')

  const {
    isLoading: tableLoading,
    data: tableResponse,
    requestHandler: tableHandler
  } = useRequest<TableDTO>({
    onMount: true,
    config: getRequestApprovedConfig(
      `${weekStart ? `weekStart=${convertDateToBackendFormat(weekStart)}` : ''}`
    ),
    instance: 'vital'
  })

  const table = React.useMemo(() => (tableResponse ? getTable(tableResponse) : []), [tableResponse])

  const onNextWeekClick = () => {
    if (!tableResponse) return

    searchParams.set('weekStart', convertDateToFrontendFormat(tableResponse.weekEnd) ?? '')
    setSearchParams(searchParams)

    tableHandler(
      getRequestApprovedConfig(`weekStart=${convertDateToBackendFormat(tableResponse.weekEnd)}`)
    )
  }

  const onPreviousWeekClick = () => {
    if (!tableResponse) return

    const startOfPreviousWeek = weekStart
      ? getStartOfPreviousWeek(weekStart)
      : getStartOfPreviousWeek(tableResponse.weekStart)

    searchParams.set('weekStart', startOfPreviousWeek)
    setSearchParams(searchParams)

    tableHandler(
      getRequestApprovedConfig(`weekStart=${convertDateToBackendFormat(startOfPreviousWeek)}`)
    )
  }

  return { tableLoading, table, onNextWeekClick, onPreviousWeekClick }
}
