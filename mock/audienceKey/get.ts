import { RestRequestConfig } from 'mock-config-server'

export const getAudienceKeyConfig: RestRequestConfig = {
  path: '/audience-key',
  method: 'get',
  routes: [
    {
      data: [
        {
          id: '1',
          room: '220'
        },
        {
          id: '2',
          room: '220'
        },
        {
          id: '3',
          room: '220'
        },
        {
          id: '4',
          room: '220'
        }
      ]
    }
  ]
}
