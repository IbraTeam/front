import { config } from '../../../config'

export const postRequestRequestIdConfig = (requestId: string, dto: AcceptOrCancelRequestDTO) =>
  config<AcceptOrCancelRequestDTO>({
    config: { method: 'post', data: dto },
    url: `/request/${requestId}`
  })
