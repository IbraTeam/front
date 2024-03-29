import { config } from '../../config'

export const getProfileConfig = () =>
  config<never>({
    config: { method: 'get' },
    url: '/account/profile'
  })
