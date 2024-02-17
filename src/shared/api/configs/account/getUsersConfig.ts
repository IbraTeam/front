import { config } from '../../config'

export const getUsersConfig = () =>
  config<never>({
    config: { method: 'get' },
    url: '/account/users'
  })
