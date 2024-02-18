import { RestRequestConfig } from 'mock-config-server'

export const getAccountUsersConfig: RestRequestConfig = {
  path: '/account/users',
  method: 'get',
  routes: [
    {
      data: {
        users: [
          {
            id: '1',
            name: 'Name',
            role: 'STUDENT',
            email: 'a@a.ru'
          },
          {
            id: '2',
            name: 'Name',
            role: 'STUDENT',
            email: 'a@a.ru'
          },
          {
            id: '3',
            name: 'Name',
            role: 'USER',
            email: 'a@a.ru'
          },
          {
            id: '4',
            name: 'Name',
            role: 'ADMIN',
            email: 'a@a.ru'
          },
          {
            id: '5',
            name: 'Name',
            role: 'TEACHER',
            email: 'a@a.ru'
          }
        ],
        page: {
          currentPage: 0,
          totalPages: 10,
          pageSize: 10,
          totalElements: 100
        }
      }
    },
    {
      entities: { query: { page: '2' } },
      data: {
        users: [
          {
            id: '1',
            name: 'Name',
            role: 'STUDENT',
            email: 'a@a.ru'
          }
        ],
        page: {
          currentPage: 2,
          totalPages: 10,
          pageSize: 10,
          totalElements: 100
        }
      }
    },
    {
      entities: { query: { name: 'AAA' } },
      data: {
        users: [
          {
            id: '5',
            name: 'AAA',
            role: 'TEACHER',
            email: 'a@a.ru'
          }
        ],
        page: {
          currentPage: 1,
          totalPages: 10,
          pageSize: 10,
          totalElements: 100
        }
      }
    }
  ]
}
