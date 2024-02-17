import { config } from '../../config'

export const postLogoutConfig = () =>
  config<never>({
    config: { method: 'post' },
    url: '/account/logout'
  })
