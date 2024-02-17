import { config } from '../../config'

export const putProfileConfig = (dto: UserEditModel) =>
  config<UserEditModel>({
    config: { method: 'put', data: dto },
    url: '/account/profile'
  })
