import { ToastContainer } from 'react-toastify'
import { InputBlock } from '@/shared/components'
import { Typography } from '@/shared/uikit'
import { useProfilePage } from './useProfilePage'

export const ProfilePage = () => {
  const { error, userInfo, onSubmit } = useProfilePage()

  return (
    <div>
      <ToastContainer />
      <Typography tag="h1" variant="h1">
        Профиль
      </Typography>
      <form className="form" onSubmit={onSubmit}>
        <InputBlock label="ФИО" constValue={userInfo?.name} blockType="row" />

        <InputBlock label="Email" constValue={userInfo?.email} blockType="row" />
        {/*
        <Button
          className="btn"
          styleType="solid"
          alertType="info"
          isLoading={isLoading || updateProfileLoading}
        >
          Обновить
        </Button> */}

        {!!error && (
          <Typography tag="p" variant="err1">
            Ошибка получения профиля
          </Typography>
        )}
        {/* {!!updateProfileError && (
          <Typography tag="p" variant="err1">
            Ошибка обновления профиля
          </Typography>
        )} */}
      </form>
    </div>
  )
}
