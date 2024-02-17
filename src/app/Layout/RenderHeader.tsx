import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { postLogoutConfig } from '@/shared/api'
import { Header } from '@/shared/components'
import { routes } from '@/shared/const'
import { useUserContext, useUserSwitcherContext } from '@/shared/lib/contexts'
import { toastOnErrorRequest } from '@/shared/lib/helpers'
import { useRequest } from '@/shared/lib/hooks'
import { Button, Typography } from '@/shared/uikit'

export const RenderHeader = () => {
  const navigate = useNavigate()
  const [activeNav, setActiveNav] = React.useState(false)
  const { isAuth, user } = useUserContext()
  const { logout } = useUserSwitcherContext()

  const { requestHandler: logoutRequest } = useRequest<never>({
    onSuccess: () => {
      logout()
      navigate(routes.root())
    },
    onError: () => {
      toastOnErrorRequest('Ошибка выхода')
    }
  })

  const toggleActiveNav = () => {
    setActiveNav((prev) => !prev)
    document.querySelector('body')?.classList.toggle('lock')
  }

  const onLoginClick = () => {
    navigate(routes.login())
    if (activeNav) toggleActiveNav()
  }

  const onRegisterClick = () => {
    navigate(routes.register())
    if (activeNav) toggleActiveNav()
  }

  const onLogoutClick = () => {
    logoutRequest(postLogoutConfig())
    if (activeNav) toggleActiveNav()
  }

  return (
    <Header
      activeNav={activeNav}
      toggleActiveNav={toggleActiveNav}
      renderNavbar={() => (
        <>
          <Typography tag="span" variant="t3">
            ДЕКАНАТ
          </Typography>

          <Link to={routes.keys()}>
            <Typography tag="span" variant="t1" isLink={true}>
              Ключи
            </Typography>
          </Link>

          <Link to={routes.users()}>
            <Typography tag="span" variant="t1" isLink={true}>
              Пользователи
            </Typography>
          </Link>

          {isAuth && <div>чтото для авторизованного</div>}
        </>
      )}
      renderUserActions={() => (
        <>
          {/* <ToggleTheme /> */}
          {isAuth && (
            <Button styleType="outlined" alertType="primary" onClick={() => navigate(routes.profile())}>
              <Typography tag="span" className="ellipsis" variant="empty">
                {user.email || 'Профиль'}
              </Typography>
            </Button>
          )}
          {isAuth && (
            <Button styleType="outlined" alertType="danger" onClick={onLogoutClick}>
              Выйти
            </Button>
          )}
          {!isAuth && (
            <>
              <Button onClick={onRegisterClick} className="btn" styleType="solid" alertType="info">
                Регистрация
              </Button>
              <Button onClick={onLoginClick} className="btn" styleType="solid" alertType="info">
                Вход
              </Button>
            </>
          )}
        </>
      )}
    />
  )
}
