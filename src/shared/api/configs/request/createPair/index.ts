import { config } from '../../../config'

export const postRequestCreatePairConfig = (dto: CreatePair) =>
  config<CreatePair>({
    config: { method: 'post', data: dto },
    url: '/request/createPair'
  })
