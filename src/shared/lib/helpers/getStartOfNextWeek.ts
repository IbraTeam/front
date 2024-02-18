import { add, format, parseISO, startOfWeek } from 'date-fns'

export const getStartOfNextWeek = (dateString: string): string => {
  const dateObj = parseISO(dateString)
  const startOfWeekDate = startOfWeek(dateObj)
  const nextWeekDate = add(startOfWeekDate, { days: 7 })
  return format(nextWeekDate, 'yyyy-MM-dd')
}
