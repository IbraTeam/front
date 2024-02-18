import { format, parseISO, startOfWeek } from 'date-fns'

export const getStartOfWeek = (dateString: string): string => {
  const dateObj = parseISO(dateString)
  const startOfWeekDate = startOfWeek(dateObj)
  return format(startOfWeekDate, 'yyyy-MM-dd')
}
