import { add, format } from 'date-fns'
import {
  convertDateToBackendFormat,
  getDateFromDateTime,
  getFrontendDateFromDateTime
} from '@/shared/lib/helpers'

const pairs: PairNumber[] = [
  'First',
  'Second',
  'Third',
  'Fourth',
  'Fifth',
  'Sixth',
  'Seventh',
  'Eighth',
  'Ninth',
  'Ten'
]

export const getTable = (tableResponse: TableDTO) => {
  const weekStartDate = getFrontendDateFromDateTime(tableResponse.weekStart)
  const days = [pairs, pairs, pairs, pairs, pairs, pairs, pairs]

  return days.map((day, dayIndex) =>
    day.map((pair) => {
      const currentDay = convertDateToBackendFormat(
        format(add(weekStartDate, { days: dayIndex }), 'yyyy-MM-dd')
      )

      const request = tableResponse.requests.find(
        (request) => getDateFromDateTime(request.dateTime) === currentDay && request.pairNumber === pair
      )

      return { date: currentDay, pairNumber: pair, request }
    })
  )
}
