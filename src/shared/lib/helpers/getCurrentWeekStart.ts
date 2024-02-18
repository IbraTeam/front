import { format, startOfWeek } from 'date-fns'

export const getCurrentWeekStart = () => {
  const currentDate = new Date()
  const startOfWeekDate = startOfWeek(currentDate)
  return format(startOfWeekDate, 'yyyy-MM-dd')
}
