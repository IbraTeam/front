import { format, parseISO } from 'date-fns'

export const convertDateToBackendFormat = (dateString: string) => {
  const dateObj = parseISO(dateString)
  const formatted = format(dateObj, 'MM.dd.yyyy')
  console.log(formatted)
  return formatted
}
