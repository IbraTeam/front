import { Controller } from 'react-hook-form'
import Select from 'react-select'
import AsyncSelect from 'react-select/async'
import { InputBlock } from '@/shared/components'
import { validations } from '@/shared/const'
import { Button, Typography } from '@/shared/uikit'
import { useBookTableCellForm } from './useBookTableCellForm'
import styles from './BookTableCellForm.module.css'

export interface BookTableCellFormProps {
  dateTime: string
  pairNumber: PairNumber
}

export const BookTableCellForm = ({ dateTime, pairNumber }: BookTableCellFormProps) => {
  const {
    onSubmit,
    register,
    errors,
    createPairLoading,
    control,
    fetchTeachers,
    keysLoading,
    keysOptions
  } = useBookTableCellForm({
    dateTime,
    pairNumber
  })

  return (
    <form onSubmit={onSubmit}>
      <Controller
        control={control}
        defaultValue={undefined}
        {...register('teacherId', validations.teacherId)}
        render={({ field: { onChange, ref } }) => (
          <AsyncSelect
            ref={ref}
            className={styles.select}
            placeholder="Выберете учителя"
            loadOptions={fetchTeachers}
            onChange={(newValue) => onChange(newValue?.value)}
            loadingMessage={() => 'Загрузка...'}
            noOptionsMessage={() => 'Ничего не найдено'}
          />
        )}
      />
      {!!errors.teacherId?.message && (
        <Typography tag="p" variant="err1">
          {errors.teacherId?.message}
        </Typography>
      )}

      <Controller
        control={control}
        defaultValue={undefined}
        {...register('keyId', validations.keyId)}
        render={({ field: { onChange, ref } }) => (
          <Select
            ref={ref}
            className={styles.select}
            placeholder="Выберете ключ"
            isSearchable
            isLoading={keysLoading}
            loadingMessage={() => 'Загрузка...'}
            options={keysOptions}
            onChange={(newValue) => onChange(newValue?.value)}
            noOptionsMessage={() => 'Ничего не найдено'}
          />
        )}
      />
      {!!errors.keyId?.message && (
        <Typography tag="p" variant="err1">
          {errors.keyId?.message}
        </Typography>
      )}

      <InputBlock
        label="Количество недель"
        error={errors.repeatCount?.message}
        {...register('repeatCount', validations.repeatCount)}
        ref={register('repeatCount', validations.repeatCount).ref}
      />

      <InputBlock
        label="Название пары"
        error={errors.pairName?.message}
        {...register('pairName', validations.pairName)}
        ref={register('pairName', validations.pairName).ref}
      />

      <Button styleType="outlined" alertType="success" isLoading={createPairLoading}>
        Создать пару
      </Button>
    </form>
  )
}