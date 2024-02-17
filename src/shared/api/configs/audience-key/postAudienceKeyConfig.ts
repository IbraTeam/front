import { config } from '../../config'

export const postAudienceKeyConfig = (dto: CreateAudienceKeyDto) =>
  config<CreateAudienceKeyDto>({
    config: { method: 'post', data: dto },
    url: 'audience-key'
  })
