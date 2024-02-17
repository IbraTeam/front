import { config } from '../../config'

export const getAudienceKeyConfig = () =>
  config<never>({
    config: { method: 'get' },
    url: '/audience-key'
  })
