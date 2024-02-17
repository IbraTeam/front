import { config } from '../../../config'

export const postRequestRequestIdConfig = (requestId: string, accept: boolean) =>
  config<never>({
    config: { method: 'post' },
    url: `/request/${requestId}?accept=${JSON.stringify(accept)}`
  })
