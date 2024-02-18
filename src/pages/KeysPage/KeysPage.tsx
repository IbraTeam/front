import { MapPinIcon } from 'lucide-react'
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
          <MapPinIcon />
          <Typography tag="p" variant="t4">
            Аудитория: <Typography tag="span">{key.room}</Typography>
          </Typography>

          {key.userName && (
            <Typography tag="p" variant="t4">
              Владелец: <Typography tag="span">{key.userName}</Typography>
            </Typography>
          )}

          <Typography tag="p" variant="t4">
            Владелец: <Typography tag="span">{key.transferStatus}</Typography>
          </Typography>

          <Button
            disabled={removeKeyLoading}
            className="btn"
            styleType="solid"
            alertType="danger"
            onClick={() => onRemoveKeyClick(key.id)}
          >
            Удалить ключ
          </Button>
        </div>
      ))}
    </div>
  )
}
