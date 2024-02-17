import { config } from '../../config'

export const getRequestConfig = (query: string) =>
  config<never>({
    config: { method: 'get' },
    url: `/request?${query}`
  })
