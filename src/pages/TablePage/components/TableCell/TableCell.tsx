import React from 'react'
import Modal from 'react-responsive-modal'
import { PairNumberTime } from '@/shared/const'
import { Button, Typography } from '@/shared/uikit'
import { BookTableCellForm } from '../BookTableCellForm/BookTableCellForm'
import styles from './TableCell.module.css'

export interface TableCellProps {
  request?: RequestDTO
  onBookSubmit: () => void
  pairNumber: PairNumber
  date: string
}

export const TableCell = ({ onBookSubmit, request, pairNumber, date }: TableCellProps) => {
  const [openModal, setOpenModal] = React.useState(false)

  return (
    <div className={styles.cell}>
      <div className={styles.top}>
        <Typography tag="p" variant="t4">
          Время: <Typography tag="span">{PairNumberTime[pairNumber]}</Typography>
        </Typography>
      </div>
      <div className={styles.content}>{!!request && <div>{request.pairName}</div>} </div>
      <div className={styles.footer}>
        {!request && (
          <>
            <Button alertType="primary" styleType="solid" onClick={() => setOpenModal(true)}>
              Забронировать
            </Button>
            <Modal open={openModal} onClose={() => setOpenModal(false)}>
              <div>
                <BookTableCellForm />
              </div>
            </Modal>
          </>
        )}
      </div>
    </div>
  )
}
