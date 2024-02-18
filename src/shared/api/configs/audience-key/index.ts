import { config } from '../../config'

export const deleteAudienceKeyConfig = (keyId: string) =>
  config<never>({
    config: { method: 'delete' },
    url: `/audience-key/${keyId}`
  })

export const postAudienceKeyConfig = (dto: CreateAudienceKeyDto) =>
  config<CreateAudienceKeyDto>({
    config: { method: 'post', data: dto },
    url: '/audience-key'
  })

export const getAudienceKeyConfig = () =>
  config<never>({
    config: { method: 'get' },
    url: '/audience-key'
  })
