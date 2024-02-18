import { SearchLoader } from '@/shared/components'
import { DayNumber } from '@/shared/const'
import { Typography } from '@/shared/uikit'
import { TableCell } from './components/TableCell/TableCell'
import { useTablePage } from './useTablePage'
import styles from './TablePage.module.css'

export const TablePage = () => {
  const { table, tableLoading, onBookSubmit } = useTablePage()

  return (
    <div className={styles.wrapper}>
      {tableLoading && <SearchLoader />}
      <div className={styles.days}>
        {table.map((day, dayIndex) => (
          <div>
            <Typography tag="h2" variant="t6">
              {DayNumber[dayIndex]}
            </Typography>
            <div className={styles.pairs}>
              {day.map((cell) => (
                <TableCell
                  date={cell.date}
                  request={cell.request}
                  onBookSubmit={onBookSubmit}
                  pairNumber={cell.pairNumber}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
