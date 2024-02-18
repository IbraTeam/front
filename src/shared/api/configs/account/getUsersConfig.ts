import { config } from '../../config'

export const getUsersConfig = (query: string) =>
  config<never>({
    config: { method: 'get' },
    url: `/account/users?size=15&${query}`
  })
