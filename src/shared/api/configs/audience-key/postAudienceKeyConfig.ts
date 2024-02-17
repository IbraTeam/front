import { authHeaders } from '../../authHeaders'
import { config } from '../../config'

export const postAudienceKeyConfig = (token: TokenResponse, dto: CreateAudienceKeyDto) =>
  config<CreateAudienceKeyDto>({
    config: { method: 'post', data: dto, headers: { ...authHeaders(token) } },
    url: 'audience-key'
  })
