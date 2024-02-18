import { config } from '../../../config'

export const getAudienceKeyGetAllConfig = () =>
  config<never>({
    config: { method: 'get' },
    url: '/audience-key/getAll'
  })
