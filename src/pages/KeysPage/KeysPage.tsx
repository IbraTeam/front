import { InputBlock, SearchLoader } from '@/shared/components'
import { validations } from '@/shared/const'
import { Button, Typography } from '@/shared/uikit'
import { useKeysPage } from './useKeysPage'
import styles from './KeysPage.module.css'

export const KeysPage = () => {
  const {
    keys,
    keysLoading,
    errors,
    onSubmit,
    register,
    createKeyLoading,
    onRemoveKeyClick,
    removeKeyLoading
  } = useKeysPage()

  return (
    <div>
      <form className={styles.form} onSubmit={onSubmit}>
        <InputBlock
          wrapperClassName={styles.inputWrapper}
          label="Номер ключа"
          type="number"
          error={errors.room?.message}
          {...register('room', validations.room)}
          ref={register('room', validations.room).ref}
        />
        <Button className="btn" styleType="outlined" alertType="info" isLoading={createKeyLoading}>
          Создать ключ
        </Button>
      </form>

      <Typography>Ключи</Typography>
      {keysLoading && <SearchLoader />}
      {keys?.map((key) => (
        <div>
          <Typography variant="t2">{key.room}</Typography>
          <Button
            disabled={removeKeyLoading}
            className="btn"
            styleType="solid"
            alertType="danger"
            onClick={() => onRemoveKeyClick(key.keyId)}
          >
            Удалить ключ
          </Button>
        </div>
      ))}
    </div>
  )
}
