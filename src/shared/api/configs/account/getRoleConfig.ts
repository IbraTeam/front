import { config } from '../../config'

export const getRoleConfig = () =>
  config<never>({
    config: { method: 'get' },
    url: '/account/role'
  })
