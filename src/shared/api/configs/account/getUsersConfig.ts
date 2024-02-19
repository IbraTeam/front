import { config } from '../../config'

export const getUsersConfig = (query: string) =>
  config<never>({
    config: { method: 'get' },
    url: `/account/users?${!query.includes('size') ? 'size=15&' : ''}${query}`
  })
