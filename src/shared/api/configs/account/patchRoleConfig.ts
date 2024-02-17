import { config } from '../../config'

export const patchRoleConfig = (userId: string, role: Role) =>
  config<Role>({
    config: { method: 'patch', data: role },
    url: `/account/role?userId=${userId}`
  })
