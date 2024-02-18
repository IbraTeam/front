import { format, parseISO } from 'date-fns'

export const getDateFromDateTime = (dateTimeString: string) => {
  const date = parseISO(dateTimeString)
  const formattedDate = format(date, 'dd.MM.yyyy')
  return formattedDate
}
