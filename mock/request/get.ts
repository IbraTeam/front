import { RestRequestConfig } from 'mock-config-server'

export const getRequestConfig: RestRequestConfig = {
  path: '/request',
  method: 'get',
  routes: [
    {
      data: {
        requests: [
          {
            id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            name: '223',
            pairName: 'Прога',
            status: 'Accepted',
            dateTime: '2024-02-17T10:56:22.971Z',
            dayNumb: 5,
            typeBooking: 'Booking',
            pairNumber: 'Fourth',
            keyId: '3fa85f64-5requests717-4562-b3fc-2c963f66afa6',
            user: {
              id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
              name: 'string',
              email: 'string',
              role: 'DEAN'
            }
          },
          {
            id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            name: '220',
            pairName: 'бАЗЫ ДАННЫХ',
            status: 'Pending',
            dateTime: '2024-02-17T10:56:22.971Z',
            dayNumb: 5,
            typeBooking: 'Pair',
            pairNumber: 'Third',
            keyId: '3fa85f64-5requests717-4562-b3fc-2c963f66afa6',
            user: {
              id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
              name: 'string',
              email: 'string',
              role: 'DEAN'
            }
          },
          {
            id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
            name: '220',
            pairName: 'бАЗЫ ДАННЫХ',
            status: 'Rejected',
            dateTime: '2024-02-17T10:56:22.971Z',
            dayNumb: 5,
            typeBooking: 'Pair',
            pairNumber: 'First',
            keyId: '3fa85f64-5requests717-4562-b3fc-2c963f66afa6',
            user: {
              id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
              name: 'string',
              email: 'string',
              role: 'DEAN'
            }
          }
        ],
        weekStart: '2024-02-17T10:56:22.971Z',
        weekEnd: '2024-02-17T10:56:22.971Z'
      }
    }
  ]
}
