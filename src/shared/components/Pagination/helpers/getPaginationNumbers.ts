export const getPaginationNumbers = ({ currentPage, totalPages }: PageResponse): (number | '...')[] => {
  const maxButtons = 3
  const pageCount = totalPages
  const numbers: (number | '...')[] = []

  if (pageCount <= maxButtons) {
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= pageCount; i++) {
      numbers.push(i)
    }
  } else {
    const leftOffset = Math.floor(maxButtons / 2)
    let start = currentPage - leftOffset
    let end = currentPage + leftOffset

    if (start < 1) {
      start = 1
      end = maxButtons
    } else if (end > pageCount) {
      end = pageCount
      start = pageCount - maxButtons + 1
    }

    if (start > 1) {
      numbers.push(1)
      if (start > 2) numbers.push('...')
    }

    // eslint-disable-next-line no-plusplus
    for (let i = start; i <= end; i++) {
      numbers.push(i)
    }

    if (end < pageCount) {
      if (end < pageCount - 1) numbers.push('...')
      numbers.push(pageCount)
    }
  }

  return numbers
}
