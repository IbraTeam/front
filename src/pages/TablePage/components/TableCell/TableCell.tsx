import classNames from 'classnames/bind'
import React from 'react'
import Modal from 'react-responsive-modal'
import { PairNumberTime } from '@/shared/const'
import { Button, Typography } from '@/shared/uikit'
import { BookTableCellForm } from '../BookTableCellForm/BookTableCellForm'
import styles from './TableCell.module.css'

export interface TableCellProps {
  request?: RequestDTO
  onBookSubmit?: () => void
  pairNumber: PairNumber
  date: string
}

const cx = classNames.bind(styles)

export const TableCell = ({ request, pairNumber, date }: TableCellProps) => {
  const [openModal, setOpenModal] = React.useState(false)

  return (
    <div className={cx(styles.cell, { booked: !!request })}>
      <div className={styles.top}>
        <Typography tag="p" variant="t4">
          Время: <Typography tag="span">{PairNumberTime[pairNumber]}</Typography>
        </Typography>
      </div>
      <div className={styles.content}>
        {!!request && (
          <div>
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
        )}{' '}
      </div>
      <div className={styles.footer}>
        {!request && (
          <>
            <Button alertType="info" styleType="solid" onClick={() => setOpenModal(true)}>
              Забронировать
            </Button>
            <Modal
              open={openModal}
              onClose={() => setOpenModal(false)}
              classNames={{ modal: styles.modal }}
            >
              <div>
                <BookTableCellForm dateTime={date} pairNumber={pairNumber} />
              </div>
            </Modal>
          </>
        )}
      </div>
    </div>
  )
}
