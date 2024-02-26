import { config } from '../../../config'

export const getRequestFreeConfig = (query: string) =>
  config<never>({
    config: { method: 'get' },
    url: `/request/free?${query}`
  })
