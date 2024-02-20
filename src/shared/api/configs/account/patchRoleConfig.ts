import { config } from '../../config'

export const patchRoleConfig = (userId: string, dto: ChangeRoleDto) =>
  config<ChangeRoleDto>({
    config: { method: 'patch', data: dto },
    url: `/account/role?userIds=${userId}`
  })
