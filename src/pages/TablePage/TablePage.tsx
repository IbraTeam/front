import { SearchLoader } from '@/shared/components'
import { DayNumber } from '@/shared/const'
import { Button, Typography } from '@/shared/uikit'
import { TableCell } from './components/TableCell/TableCell'
import { useTablePage } from './useTablePage'
import styles from './TablePage.module.css'

export const TablePage = () => {
  const { table, tableLoading, onNextWeekClick, onPreviousWeekClick } = useTablePage()

  return (
    <div className={styles.wrapper}>
      {tableLoading && <SearchLoader />}
      <div className={styles.days}>
        <Button alertType="primary" onClick={onPreviousWeekClick}>
          «
        </Button>
        {table.map((day, dayIndex) => (
          <div>
            {!!day.length && (
              <Typography tag="h2" variant="t4" className={styles.day}>
                {day[0].date}
              </Typography>
            )}
            <Typography tag="h2" variant="t6" className={styles.day}>
              {DayNumber[dayIndex]}
            </Typography>
            <div className={styles.pairs}>
              {day.map((cell) => (
                <TableCell date={cell.date} request={cell.request} pairNumber={cell.pairNumber} />
              ))}
            </div>
          </div>
        ))}
        <Button alertType="primary" onClick={onNextWeekClick}>
          »
        </Button>
      </div>
    </div>
  )
}
