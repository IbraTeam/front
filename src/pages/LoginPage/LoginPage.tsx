import { InputBlock } from '@/shared/components'
import { validations } from '@/shared/const'
import { Button } from '@/shared/uikit'
import { useLoginPage } from './useLoginPage'

export const LoginPage = () => {
  const { errors, onSubmit, isLoading, register } = useLoginPage()

  return (
    <div>
      <form onSubmit={onSubmit}>
        <InputBlock
          label="Email"
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

        <Button className="btn" styleType="solid" alertType="info" isLoading={isLoading}>
          Войти
        </Button>
      </form>
    </div>
  )
}
