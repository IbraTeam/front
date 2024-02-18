import { RestRequestConfig } from 'mock-config-server'

export const getRequestApproved: RestRequestConfig = {
  path: '/request/approved',
  method: 'get',
  routes: [
    {
      data: {
        requests: [
          {
            id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            name: '230',
            pairName: 'Афигеть',
            status: 'Accepted',
            dateTime: '2024-02-18T13:19:16.168Z',
            dayNumb: 0,
            typeBooking: 'Pair',
            pairNumber: 'First',
            keyId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            user: {
              id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
              name: 'Димка',
              email: 'почта',
              role: 'ADMIN'
            }
          }
        ],
        weekStart: '2024-02-18T13:19:16.169Z',
        weekEnd: '2024-02-18T13:19:16.169Z'
      }
    }
  ]
}
