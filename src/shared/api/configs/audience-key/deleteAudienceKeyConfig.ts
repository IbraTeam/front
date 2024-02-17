import { config } from '../../config'

export const deleteAudienceKeyConfig = (keyId: string) =>
  config<never>({
    config: { method: 'delete' },
    url: `audience-key/${keyId}`
  })
