import Select from 'react-select'
import { InputBlock, SearchLoader } from '@/shared/components'
import {
  selectStyles,
  StatusEnum,
  StatusOption,
  statusOptions,
  TypeBookingEnum,
  typeBookingOptions
} from '@/shared/const'
import { convertDateToFrontendFormat } from '@/shared/lib/helpers'
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
    onBookingTypeChange,
    onWeekStartChange,
    bookingType,
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

      <Typography>Выберите день недели (выведутся заявки со всей недели)</Typography>
      <div className={styles.top}>
        <Button className="btn" onClick={() => onPreviousWeekClick()}>
          Пред. неделя
        </Button>

        <InputBlock
          wrapperClassName={styles.inputWrapper}
          type="date"
          value={weekStart ?? convertDateToFrontendFormat(requests?.weekStart)}
          onChange={(event) => onWeekStartChange(event.currentTarget.value)}
        />

        <Button className="btn" onClick={() => onNextWeekClick()}>
          След. неделя
        </Button>
      </div>

      <Select
        className={styles.select}
        options={typeBookingOptions}
        placeholder="Выберите тип заявки"
        isSearchable={false}
        defaultValue={undefined}
        value={{
          label: TypeBookingEnum[bookingType as TypeBooking] || '',
          value: bookingType
        }}
        onChange={onBookingTypeChange}
      />

      <Select
        className={styles.select}
        options={statusOptions}
        placeholder="Выберите статус заявки"
        isSearchable={false}
        isMulti
        value={statuses.map((status: string) => ({
          label: StatusEnum[status as Status] || '',
          value: status
        }))}
        onChange={onStatusesChange}
        styles={selectStyles<StatusOption, true>()}
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
