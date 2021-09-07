import React from 'react'
import PropTypes from 'prop-types'
import * as S from './pagination.style'
import { useHistory } from 'react-router-dom'
import { usePagination } from '@material-ui/lab'
import qs from 'query-string'
import { path } from 'src/constants/path'
import classNames from 'classnames'

Pagination.propTypes = {
  pagination: PropTypes.object,
  filters: PropTypes.object
}

function Pagination({ filters, pagination }) {
  const history = useHistory()
  const { items } = usePagination({
    count: pagination.page_size || 0,
    page: pagination.page || 1
  })

  const goToPrev = () => {
    if (pagination.page !== 1) {
      const _filters = { ...filters, page: pagination.page - 1 }
      history.push(path.product + `?${qs.stringify(_filters)}`)
    }
  }

  const goToNext = () => {
    if (pagination.page !== pagination.page_size) {
      const _filters = { ...filters, page: pagination.page + 1 }
      history.push(path.product + `?${qs.stringify(_filters)}`)
    }
  }

  const goToPage = page => {
    const _filters = { ...filters, page }
    history.push(path.product + `?${qs.stringify(_filters)}`)
  }

  return (
    // <S.Pagination>
    //   <S.PaginationItem>
    //     <S.PaginationPrevButton className="fas fa-angle-left" />
    //   </S.PaginationItem>

    //   <S.PaginationItem className="active">1</S.PaginationItem>

    //   <S.PaginationItem>2</S.PaginationItem>

    //   <S.PaginationItem>3</S.PaginationItem>

    //   <S.PaginationItem>4</S.PaginationItem>

    //   <S.PaginationItem>...</S.PaginationItem>
    //   <S.PaginationItem>
    //     <S.PaginationNextButton className="fas fa-angle-right" />
    //   </S.PaginationItem>
    // </S.Pagination>
    <div>
      <S.Pagination>
        {items.map(({ page, type, selected }, index) => {
          let children = null
          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = (
              <S.ButtonNoOutline disabled key={index}>
                ...
              </S.ButtonNoOutline>
            )
          } else if (type === 'previous') {
            children = (
              <S.PaginationPrevButton
                key={index}
                onClick={goToPrev}
                disabled={pagination.page === 1}
                className="fas fa-angle-left"
              />
            )
          } else if (type === 'next') {
            children = (
              <S.PaginationNextButton
                key={index}
                onClick={goToNext}
                disabled={pagination.page === pagination.page_size}
                className="fas fa-angle-right"
              />
            )
          } else if (type === 'page') {
            children = (
              <S.PaginationItem
                key={index}
                className={classNames({ active: selected })}
                onClick={() => goToPage(page)}
              >
                {page}
              </S.PaginationItem>
            )
          }
          return children
        })}
      </S.Pagination>
    </div>
  )
}

export default Pagination
