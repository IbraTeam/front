import { RestRequestConfig } from 'mock-config-server'

export const getAudienceKeyGetAllConfig: RestRequestConfig = {
  path: '/audience-key/getAll',
  method: 'get',
  routes: [
    {
      data: [
        {
          id: '1',
          room: '222',
          userName: 'Шумкофф Алексей',
          transferStatus: 'IN_DEAN'
        },
        {
          id: '2',
          room: '1000',
          userName: 'Гегельман',
          transferStatus: 'IN_DEAN'
        },
        {
          id: '3',
          room: '20',
          userName: 'Ковкин',
          transferStatus: 'ON_HANDS'
        },
        {
          id: '4',
          room: '220(3)',
          userName: 'Алексей',
          transferStatus: 'TRANSFERRING'
        }
      ]
    }
  ]
}
