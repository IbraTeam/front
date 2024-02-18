import { config } from '../../../config'

export const getRequestApprovedConfig = (query: string) =>
  config<never>({
    config: { method: 'get' },
    url: `/request/approved?${query}`
  })
