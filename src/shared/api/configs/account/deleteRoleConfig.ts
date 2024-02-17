import { config } from '../../config'

export const deleteRoleConfig = (userId: string, dto: RoleRequest) =>
  config<RoleRequest>({
    config: { method: 'delete', data: dto },
    url: `/account/role/${userId}`
  })
