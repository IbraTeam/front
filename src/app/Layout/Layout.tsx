import { AxiosInterceptor, ThemeProvider } from '@/features'
import { UserProvider } from '@/features/UserProvider'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Footer } from '@/shared/components'
import { RenderHeader } from './RenderHeader'

export const Layout = () => (
  <ThemeProvider>
    <UserProvider>
      <AxiosInterceptor>
        <ToastContainer />
        <div className="wrapper">
          <RenderHeader />
          <main className="content">
            <div className="box">
              <Outlet />
            </div>
          </main>
          <Footer />
        </div>
      </AxiosInterceptor>
    </UserProvider>
  </ThemeProvider>
)
