import { Typography } from '@/shared/uikit'
import styles from './TableCellRequest.module.css'

export interface TableCellRequestProps {
  request: RequestDTO
}

export const TableCellRequest = ({ request }: TableCellRequestProps) => (
  <div className={styles.wrapper}>
    {request.pairName && (
      <Typography tag="p" variant="t4">
        Название пары: <Typography tag="span">{request.pairName}</Typography>
      </Typography>
    )}
    <Typography tag="p" variant="t4">
      Ключ: <Typography tag="span">{request.name}</Typography>
    </Typography>
    <Typography tag="p" variant="t4">
      Заказчик: <Typography tag="span">{request.user.name}</Typography>
    </Typography>
  </div>
)
