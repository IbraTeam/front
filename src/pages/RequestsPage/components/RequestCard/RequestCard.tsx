import classNames from 'classnames/bind'
import { CheckCircleIcon, CircleEllipsisIcon, DoorClosedIcon, RefreshCcwDotIcon, XCircleIcon } from 'lucide-react'
import { PairNumberTime, StatusEnum, TypeBookingEnum } from '@/shared/const'
import { getDateFromDateTime } from '@/shared/lib/helpers'
import { Button, Typography } from '@/shared/uikit'
import styles from './RequestCard.module.css'

export interface RequestCardProps {
  request: RequestDTO
  onAcceptRequestClick: (id: string) => void
  onRejectRequestClick: (id: string) => void
}

const cx = classNames.bind(styles)

export const RequestCard = ({
  request,
  onAcceptRequestClick,
  onRejectRequestClick
}: RequestCardProps) => (
  <div
    className={cx(
      styles.card,
      request.status === 'Accepted' && styles.accepted,
      request.status === 'Pending' && styles.pending,
      request.status === 'Rejected' && styles.rejected,
      request.status === 'Issued' && styles.issued
    )}
  >
    <div className={styles.top}>
      <div className={styles.status}>
        {request.status === 'Accepted' && <CheckCircleIcon color="var(--success-primary)" />}
        {request.status === 'Pending' && <CircleEllipsisIcon color="var(--info-primary)" />}
        {request.status === 'Rejected' && <XCircleIcon color="var(--danger-primary)" />}
        {request.status === 'Issued' && <RefreshCcwDotIcon color="var(--neutral-100)" />}
        <Typography tag="p" variant="t4">
          {StatusEnum[request.status]}
        </Typography>
      </div>
      <Typography tag="p" variant="t4">
        Название: <Typography tag="span">{request.pairName}</Typography>
      </Typography>

      <Typography tag="p" variant="t4">
        Тип заявки: <Typography tag="span">{TypeBookingEnum[request.typeBooking]}</Typography>
      </Typography>

      <Typography tag="p" variant="t4">
        Аудитория: <Typography tag="span">{request.name}</Typography>
      </Typography>

      <Typography tag="p" variant="t4">
        Дата: <Typography tag="span">{getDateFromDateTime(request.dateTime)}</Typography>
      </Typography>

      <Typography tag="p" variant="t4">
        Время: <Typography tag="span">{PairNumberTime[request.pairNumber]}</Typography>
      </Typography>

      <Typography tag="p" variant="t4">
        Заказчик: <Typography tag="span">{request.user.name}</Typography>
      </Typography>
    </div>

    {request.status === 'Pending' && (
      <div className={styles.actions}>
        <Button styleType="solid" alertType="danger" onClick={() => onRejectRequestClick(request.id)}>
          Отклонить
        </Button>
        <Button styleType="solid" alertType="success" onClick={() => onAcceptRequestClick(request.id)}>
          Одобрить
        </Button>
      </div>
    )}
  </div>
)
