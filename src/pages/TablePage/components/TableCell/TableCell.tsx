import classNames from 'classnames/bind'
import React from 'react'
import Modal from 'react-responsive-modal'
import { PairNumberTime } from '@/shared/const'
import { Button, Typography } from '@/shared/uikit'
import { BookTableCellForm } from '../BookTableCellForm/BookTableCellForm'
import { TableCellRequest } from '../TableCellRequest/TableCellRequest'
import styles from './TableCell.module.css'

export interface TableCellProps {
  requests: RequestDTO[]
  onBookSubmit?: () => void
  pairNumber: PairNumber
  date: string
}

const cx = classNames.bind(styles)

export const TableCell = ({ requests, pairNumber, date }: TableCellProps) => {
  const [openModal, setOpenModal] = React.useState(false)
  const [openRequestsModal, setOpenRequestsModal] = React.useState(false)

  return (
    <div className={cx(styles.cell, { booked: !!requests.length })}>
      <div className={styles.top}>
        <Typography tag="p" variant="t4">
          Время: <Typography tag="span">{PairNumberTime[pairNumber]}</Typography>
        </Typography>
      </div>
      <div className={styles.content}>
        {!!requests.length && <TableCellRequest request={requests[0]} />}
        {requests.length > 1 && (
          <>
            <Button
              alertType="info"
              styleType="solid"
              onClick={() => setOpenRequestsModal(true)}
              className={styles.seeAll}
            >
              Просмотреть всё
            </Button>
            <Modal
              open={openRequestsModal}
              onClose={() => setOpenRequestsModal(false)}
              classNames={{ modal: styles.modal }}
            >
              <div className={styles.modal__content}>
                {requests.map((request) => (
                  <TableCellRequest request={request} />
                ))}
              </div>
            </Modal>
          </>
        )}
      </div>
      <div className={styles.footer}>
        <Button alertType="info" styleType="solid" onClick={() => setOpenModal(true)}>
          Забронировать
        </Button>
        <Modal open={openModal} onClose={() => setOpenModal(false)} classNames={{ modal: styles.modal }}>
          <div className={styles.modal__content}>
            <BookTableCellForm
              dateTime={date}
              pairNumber={pairNumber}
              onBooked={() => setOpenModal(false)}
            />
          </div>
        </Modal>
      </div>
    </div>
  )
}
