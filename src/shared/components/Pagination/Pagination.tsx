import { Button } from '@/shared/uikit'
import { getPaginationNumbers } from './helpers/getPaginationNumbers'
import s from './styles.module.css'

interface PaginationProps {
  pagination: PageResponse
  onPageChange: (page: number) => void
}

export const Pagination = ({ pagination, onPageChange }: PaginationProps) => (
  <div className={s.wrapper}>
    <Button
      className={s.btn}
      styleType="outlined"
      alertType="info"
      disabled={pagination.currentPage === 0}
      onClick={() => onPageChange(pagination.currentPage - 1)}
    >
      «
    </Button>

    {getPaginationNumbers(pagination).map((page) => (
      <div key={page}>
        {page === '...' && <div>...</div>}
        {page !== '...' && (
          <Button
            className={s.btn}
            styleType={pagination.currentPage === page - 1 ? 'solid' : 'outlined'}
            onClick={() => onPageChange(page - 1)}
          >
            {page}
          </Button>
        )}
      </div>
    ))}

    <Button
      className={s.btn}
      styleType="outlined"
      alertType="info"
      disabled={pagination.currentPage === pagination.totalPages - 1}
      onClick={() => onPageChange(pagination.currentPage + 1)}
    >
      »
    </Button>
  </div>
)
