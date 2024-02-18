import Select from 'react-select'
import { InputBlock, SearchLoader } from '@/shared/components'
import {
  PairNumberEnum,
  PairNumberOption,
  pairNumberOptions,
  selectStyles,
  StatusEnum,
  StatusOption,
  statusOptions,
  TypeBookingEnum,
  TypeBookingOption,
  typeBookingOptions
} from '@/shared/const'
import { Button, Typography } from '@/shared/uikit'
import { RequestCard } from './components/RequestCard/RequestCard'
import { useRequestsPage } from './useRequestsPage'
import styles from './RequestsPage.module.css'

export const RequestsPage = () => {
  const {
    onAcceptRequestClick,
    onRejectRequestClick,
    onNextWeekClick,
    weekStart,
    onStatusesChange,
    onTypesChange,
    onWeekStartChange,
    onPairNumbersChange,
    bookingTypes,
    pairNumbers,
    statuses,
    requests,
    requestsLoading,
    onPreviousWeekClick
  } = useRequestsPage()

  return (
    <div className={styles.wrapper}>
      <Typography variant="h1" tag="h1">
        Заявки
      </Typography>

      <Typography>Выберете день недели (выведутся заявки со всей недели)</Typography>
      <div className={styles.top}>
        <Button className="btn" onClick={() => onPreviousWeekClick()}>
          Пред. неделя
        </Button>

        <InputBlock
          wrapperClassName={styles.inputWrapper}
          type="date"
          value={weekStart ?? ''}
          onChange={(event) => onWeekStartChange(event.currentTarget.value)}
        />

        <Button className="btn" onClick={() => onNextWeekClick()}>
          След. неделя
        </Button>
      </div>

      <Select
        className={styles.select}
        options={typeBookingOptions}
        placeholder="Выберете тип заявки"
        isSearchable={false}
        isMulti
        value={bookingTypes.map((category: string) => ({
          label: TypeBookingEnum[category as TypeBooking] || '',
          value: category
        }))}
        onChange={onTypesChange}
        styles={selectStyles<TypeBookingOption, true>()}
      />

      <Select
        className={styles.select}
        options={statusOptions}
        placeholder="Выберете статус заявки"
        isSearchable={false}
        isMulti
        value={statuses.map((status: string) => ({
          label: StatusEnum[status as Status] || '',
          value: status
        }))}
        onChange={onStatusesChange}
        styles={selectStyles<StatusOption, true>()}
      />

      <Select
        className={styles.select}
        options={pairNumberOptions}
        placeholder="Выберете номер пары"
        isSearchable={true}
        isMulti
        value={pairNumbers.map((pairNumber: string) => ({
          label: PairNumberEnum[pairNumber as PairNumber] || '',
          value: pairNumber
        }))}
        onChange={onPairNumbersChange}
        styles={selectStyles<PairNumberOption, true>()}
        maxMenuHeight={150}
      />

      {requestsLoading && <SearchLoader />}
      <div className={styles.cards}>
        {requests?.requests?.map((request, index) => (
          <RequestCard
            key={index}
            request={request}
            onAcceptRequestClick={onAcceptRequestClick}
            onRejectRequestClick={onRejectRequestClick}
          />
        ))}
      </div>
    </div>
  )
}
