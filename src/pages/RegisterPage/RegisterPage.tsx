import { ButtonLoader, InputBlock } from '@/shared/components'
import { validations } from '@/shared/const'
import { Button, Typography } from '@/shared/uikit'
import { useRegisterPage } from './useRegisterPage'

export const RegisterPage = () => {
  const { errors, isLoading, register, onSubmit } = useRegisterPage()

  return (
    <div>
      <Typography tag="h1" variant="h1">
        Регистрация
      </Typography>
      <form className="form" onSubmit={onSubmit}>
        <InputBlock
          label="ФИО"
          error={errors.name?.message}
          {...register('name', validations.birthDate)}
          ref={register('name', validations.birthDate).ref}
        />

        <InputBlock
          label="Email (будет использоваться для входа в систему)"
          error={errors.email?.message}
          {...register('email', validations.email)}
          ref={register('email', validations.email).ref}
        />

        <InputBlock
          label="Пароль"
          type="password"
          error={errors.password?.message}
          {...register('password', validations.password)}
          ref={register('password', validations.password).ref}
        />

        <Button styleType="solid" alertType="info" isLoading={isLoading} loader={<ButtonLoader />}>
          Зарегестрироваться
        </Button>
      </form>
    </div>
  )
}
