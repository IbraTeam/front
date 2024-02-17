import { RestRequestConfig } from 'mock-config-server'

export const getAccountUsersConfig: RestRequestConfig = {
  path: '/account/users',
  method: 'get',
  routes: [
    {
      data: [
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
      ]
    }
  ]
}
