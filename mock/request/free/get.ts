import { RestRequestConfig } from 'mock-config-server'

export const getRequestFreeConfig: RestRequestConfig = {
  path: '/request/free',
  method: 'get',
  routes: [
    {
      data: [
        { name: '202', keyId: '1' },
        { name: '203', keyId: '2' },
        { name: '204', keyId: '3' }
      ]
    },
    {
      entities: {
        query: { repeatedCount: '10', pairNumber: 'First', bookingTime: '02.19.2024' }
      },
      data: [{ name: '202', keyId: '1' }]
    }
  ]
}
