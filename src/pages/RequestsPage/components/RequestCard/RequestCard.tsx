import classNames from 'classnames/bind'
import styles from './RequestCard.module.css'

export interface RequestCardProps {
  request: RequestDTO
  onAcceptRequestClick: (id: string) => void
  onRejectRequestClick: (id: string) => void
}

const cx = classNames.bind(styles)

export const RequestCard = ({ request }: RequestCardProps) => (
  <div
    className={cx(
      styles.card,
      request.status === 'Accepted' && styles.accepted,
      request.status === 'Pending' && styles.pending,
      request.status === 'Rejected' && styles.rejected
    )}
  >
    {request.id}
  </div>
)
