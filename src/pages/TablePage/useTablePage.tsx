import React from 'react'
import { getRequestApprovedConfig } from '@/shared/api'
import { convertDateToBackendFormat, getStartOfPreviousWeek } from '@/shared/lib/helpers'
import { useRequest } from '@/shared/lib/hooks'
import { getTable } from './helpers/getTable'

export const useTablePage = () => {
  const {
    isLoading: tableLoading,
    data: tableResponse,
    requestHandler: tableHandler
  } = useRequest<TableDTO>({ onMount: true, config: getRequestApprovedConfig('') })

  const table = React.useMemo(() => (tableResponse ? getTable(tableResponse) : []), [tableResponse])

  const onNextWeekClick = () => {
    if (!tableResponse) return

    tableHandler(getRequestApprovedConfig(`weekStart=${tableResponse.weekEnd}`))
  }

  const onPreviousWeekClick = () => {
    if (!tableResponse) return

    tableHandler(
      getRequestApprovedConfig(
        `weekStart=${convertDateToBackendFormat(getStartOfPreviousWeek(tableResponse.weekStart))}`
      )
    )
  }

  return { tableLoading, table, onNextWeekClick, onPreviousWeekClick }
}
