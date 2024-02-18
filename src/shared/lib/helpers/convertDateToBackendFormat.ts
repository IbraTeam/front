import { format, parseISO } from 'date-fns'

export const convertDateToBackendFormat = (dateString: string) => {
  const dateObj = parseISO(dateString)
  const formatted = format(dateObj, 'MM.dd.yyyy')
  return formatted
}

export const convertDateToFrontendFormat = (dateString?: string) => {
  if (!dateString) return undefined
  const dateObj = parseISO(dateString)
  const formatted = format(dateObj, 'yyyy-MM-dd')
  return formatted
}
