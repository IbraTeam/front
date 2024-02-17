import { authHeaders } from '../../authHeaders'
import { config } from '../../config'

export const deleteAudienceKeyConfig = (token: TokenResponse, keyId: string) =>
  config<never>({
    config: { method: 'delete', headers: { ...authHeaders(token) } },
    url: `audience-key?keyId=${keyId}`
  })
