import { format, parseISO, startOfWeek, sub } from 'date-fns'

export const getStartOfPreviousWeek = (dateString: string): string => {
  const dateObj = parseISO(dateString)
  const startOfWeekDate = startOfWeek(dateObj, { weekStartsOn: 1 })
  const nextWeekDate = sub(startOfWeekDate, { days: 7 })
  return format(nextWeekDate, 'yyyy-MM-dd')
}
