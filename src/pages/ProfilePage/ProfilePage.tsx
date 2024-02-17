import { ToastContainer } from 'react-toastify'
import { ButtonLoader, InputBlock } from '@/shared/components'
import { validations } from '@/shared/const'
import { Button, Typography } from '@/shared/uikit'
import { useProfilePage } from './useProfilePage'

export const ProfilePage = () => {
  const {
    updateProfileLoading,
    updateProfileError,
    error,
    errors,
    isLoading,
    userInfo,
    register,
    onSubmit
  } = useProfilePage()

  return (
    <div>
      <ToastContainer />
      <Typography tag="h1" variant="h1">
        Профиль
      </Typography>
      <form className="form" onSubmit={onSubmit}>
        <InputBlock
          label="ФИО"
          blockType="row"
          error={errors.name?.message}
          {...register('name', validations.name)}
          ref={register('name', validations.name).ref}
        />

        <InputBlock label="Email" constValue={userInfo?.email} blockType="row" />

        <Button
          className="btn"
          styleType="solid"
          alertType="info"
          isLoading={isLoading || updateProfileLoading}
          loader={<ButtonLoader />}
        >
          Обновить
        </Button>

        {!!error && (
          <Typography tag="p" variant="err1">
            Ошибка получения профиля
          </Typography>
        )}
        {!!updateProfileError && (
          <Typography tag="p" variant="err1">
            Ошибка обновления профиля, проверьте корректность выбора адреса и введенных данных
          </Typography>
        )}
      </form>
    </div>
  )
}
