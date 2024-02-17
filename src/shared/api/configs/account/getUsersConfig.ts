import { config } from '../../config'

export const getUsersConfig = (roles: string[], name?: string | null) =>
  config<never>({
    config: { method: 'get' },
    url: `/account/users?${name ? `name=${name}&` : ''}${roles.map((role) => `roles=${role}&`).join('')}`
  })
