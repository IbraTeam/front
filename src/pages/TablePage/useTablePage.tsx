import React from 'react'
import { getRequestApprovedConfig } from '@/shared/api'
import { useRequest } from '@/shared/lib/hooks'
import { getTable } from './helpers/getTable'

export const useTablePage = () => {
  const {
    isLoading: tableLoading,
    data: tableResponse,
    requestHandler: tableHandler
  } = useRequest<TableDTO>({ onMount: true, config: getRequestApprovedConfig('') })

  const table = React.useMemo(() => (tableResponse ? getTable(tableResponse) : []), [tableResponse])

  const onBookSubmit = () => {
    console.log('here')
  }

  return { tableLoading, table, onBookSubmit }
}
