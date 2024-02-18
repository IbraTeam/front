import {
  KeysPage,
  LoginPage,
  ProfilePage,
  RegisterPage,
  RequestsPage,
  TablePage,
  UsersPage
} from '@/pages'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import { routes } from '@/shared/const'
import { Layout } from './Layout/Layout'
import { ProtectedRoute } from './ProtectedRoute'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: (
          <ProtectedRoute>
            <Outlet />
          </ProtectedRoute>
        ),
        children: [
          {
            path: routes.root(),
            element: <div></div>
          },
          {
            path: routes.profile(),
            element: <ProfilePage />
          },
          {
            path: routes.keys(),
            element: <KeysPage />
          },
          {
            path: routes.users(),
            element: <UsersPage />
          },
          {
            path: routes.requests(),
            element: <RequestsPage />
          },
          {
            path: routes.table(),
            element: <TablePage />
          }
        ]
      },
      {
        path: routes.login(),
        element: <LoginPage />
      },
      {
        path: routes.register(),
        element: <RegisterPage />
      }
    ]
  }
])
