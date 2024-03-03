import { add, format } from 'date-fns'
import { getFrontendDateFromDateTime } from '@/shared/lib/helpers'

const pairs: PairNumber[] = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth']

export const getTable = (tableResponse: TableDTO) => {
  const weekStartDate = getFrontendDateFromDateTime(tableResponse.weekStart)
  const days = [pairs, pairs, pairs, pairs, pairs, pairs, pairs]

  return days.map((day, dayIndex) =>
    day.map((pair) => {
      const currentDay = format(add(weekStartDate, { days: dayIndex }), 'yyyy-MM-dd')

      const requests = tableResponse.requests.filter(
        (request) =>
          getFrontendDateFromDateTime(request.dateTime) === currentDay && request.pairNumber === pair
      )

      return { date: currentDay, pairNumber: pair, requests }
    })
  )
}
