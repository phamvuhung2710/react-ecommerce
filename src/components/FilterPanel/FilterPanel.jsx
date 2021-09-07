import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import * as S from './filterpanel.style'
import { NavLink, useHistory } from 'react-router-dom'
import RatingStars from '../RatingStars/RatingStars'
import { path } from 'src/constants/path'
import qs from 'query-string'
import useQuery from 'src/hooks/useQuery'
import { Controller, useForm } from 'react-hook-form'

FilterPanel.propTypes = {
  categories: PropTypes.array.isRequired,
  filters: PropTypes.object.isRequired
}

function FilterPanel({ categories, filters }) {
  const history = useHistory()
  const query = useQuery()
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    clearErrors,
    reset,
    setValue
  } = useForm({
    defaultValues: {
      minPrice: filters.minPrice || '',
      maxPrice: filters.maxPrice || ''
    },
    reValidateMode: 'onSubmit'
  })

  const validPrice = () => {
    const minPrice = getValues('minPrice')
    const maxPrice = getValues('maxPrice')
    const message = 'Vui lòng điền khoảng giá phù hợp'
    if (minPrice !== '' && maxPrice !== '') {
      return Number(maxPrice) >= Number(minPrice) || message
    }
    return minPrice !== '' || maxPrice !== '' || message
  }

  const searchPrice = data => {
    const { minPrice, maxPrice } = data
    if (minPrice !== '' || maxPrice !== '') {
      let _filters = filters
      if (minPrice !== '') {
        _filters = { ..._filters, minPrice }
      } else {
        delete _filters.minPrice
      }

      if (maxPrice !== '') {
        _filters = { ..._filters, maxPrice }
      } else {
        delete _filters.maxPrice
      }

      history.push(path.product + `?${qs.stringify(_filters)}`)
    }
  }

  const clearAll = () => {
    reset()
    history.push({
      pathName: path.product
    })
  }

  useEffect(() => {
    setValue('minPrice', filters.minPrice || '')
    setValue('maxPrice', filters.maxPrice || '')
  }, [setValue, filters])
  return (
    <S.Filter>
      <S.FilterCategory>
        <S.FilterCategoryIcon src="/img/icons8-list.png" />
        <S.FilterCategoryName>Tất cả danh mục</S.FilterCategoryName>
      </S.FilterCategory>
      <S.CategoryList>
        {categories.map(category => (
          <S.CategoryItem key={category._id}>
            <S.CategoryItemIcon src="/img/icons8-select-48.png" alt="#" />
            <S.CategoryName
              to={path.product + `?category=${category._id}`}
              isActive={(match, location) => {
                if (!match) return false
                const query = qs.parse(location.search)
                return query.category === category._id
              }}
              activeClassName={'category--active'}
            >
              {category.name}
            </S.CategoryName>
          </S.CategoryItem>
        ))}

      </S.CategoryList>

      <S.FilterSearch>
        <S.FilterSearchIcon src="/img/icons8-filter-64.png" />
        <S.FilterSearchText>Bộ lọc tìm kiếm</S.FilterSearchText>
      </S.FilterSearch>

      <S.FilterGroup>
        <S.FilterGroupHeader>Khoảng giá</S.FilterGroupHeader>
        <S.PriceRangeGroup>
          <Controller
            name="minPrice"
            control={control}
            rules={{ validate: { validPrice } }}
            render={({ field }) => (
              <S.PriceRangeInput
                placeholder="Từ"
                onChange={value => {
                  clearErrors()
                  field.onChange(value)
                }}
                value={getValues('minPrice')}
              />
            )}
          />

          <S.PriceRangeLine />
          <Controller
            name="maxPrice"
            control={control}
            rules={{ validate: { validPrice } }}
            render={({ field }) => (
              <S.PriceRangeInput
                placeholder="Đến"
                onChange={value => {
                  clearErrors()
                  field.onChange(value)
                }}
                value={getValues('maxPrice')}
              />
            )}
          />
        </S.PriceRangeGroup>
        {Object.values(errors).length !== 0 && (
          <S.PriceErrorMessage>
            Vui lòng điền khoảng giá phù hợp
          </S.PriceErrorMessage>
        )}

        <S.PriceRangeButton onClick={handleSubmit(searchPrice)}>
          Áp dụng
        </S.PriceRangeButton>
      </S.FilterGroup>

      <S.FilterGroup>
        <S.FilterGroupHeader>Đánh Giá</S.FilterGroupHeader>
        <RatingStars filters={filters} />
      </S.FilterGroup>

      {/* <S.FilterGroup>
        <S.FilterGroupHeader>Giảm giá</S.FilterGroupHeader>
        <S.FilterDiscount>
          <S.FilterDiscountItem>
            <S.FilterCheckbox htmlFor="filter-checkbox">
              <S.FilterCheckboxInput
                type="checkbox"
                id="filter-checkbox"
                name="filter"
              />
              <S.FilterCheckboxStyle className="filter-checkbox__style">
                <S.FilterCheckboxStyleIcon className="fas fa-check" />
              </S.FilterCheckboxStyle>
            </S.FilterCheckbox>
            <S.FilterDiscountName>10% trở lên</S.FilterDiscountName>
          </S.FilterDiscountItem>

          <S.FilterDiscountItem>
            <S.FilterCheckbox htmlFor="filter-checkbox2">
              <S.FilterCheckboxInput
                type="checkbox"
                id="filter-checkbox2"
                name="filter"
              />
              <S.FilterCheckboxStyle className="filter-checkbox__style">
                <S.FilterCheckboxStyleIcon className="fas fa-check" />
              </S.FilterCheckboxStyle>
            </S.FilterCheckbox>
            <S.FilterDiscountName>20% trở lên</S.FilterDiscountName>
          </S.FilterDiscountItem>

          <S.FilterDiscountItem>
            <S.FilterCheckbox htmlFor="filter-checkbox3">
              <S.FilterCheckboxInput
                type="checkbox"
                id="filter-checkbox3"
                name="filter"
              />
              <S.FilterCheckboxStyle className="filter-checkbox__style">
                <S.FilterCheckboxStyleIcon className="fas fa-check" />
              </S.FilterCheckboxStyle>
            </S.FilterCheckbox>
            <S.FilterDiscountName>30% trở lên</S.FilterDiscountName>
          </S.FilterDiscountItem>
        </S.FilterDiscount>
      </S.FilterGroup> */}

      {/* <S.FilterGroup>
        <S.FilterGroupHeader>Dịch vụ</S.FilterGroupHeader>
        <S.FilterService>
          <S.FilterServiceItem>
            <S.FilterCheckbox htmlFor="filter-checkbox4">
              <S.FilterCheckboxInput
                type="checkbox"
                id="filter-checkbox4"
                name="filter"
              />
              <S.FilterCheckboxStyle className="filter-checkbox__style">
                <S.FilterCheckboxStyleIcon className="fas fa-check" />
              </S.FilterCheckboxStyle>
            </S.FilterCheckbox>
            <S.FilterServiceName>Miễn phí vận chuyển</S.FilterServiceName>
          </S.FilterServiceItem>

          <S.FilterServiceItem>
            <S.FilterCheckbox htmlFor="filter-checkbox5">
              <S.FilterCheckboxInput
                type="checkbox"
                id="filter-checkbox5"
                name="filter"
              />
              <S.FilterCheckboxStyle className="filter-checkbox__style">
                <S.FilterCheckboxStyleIcon className="fas fa-check" />
              </S.FilterCheckboxStyle>
            </S.FilterCheckbox>
            <S.FilterServiceName>Giao siêu tốc 2H</S.FilterServiceName>
          </S.FilterServiceItem>
        </S.FilterService>
      </S.FilterGroup> */}

      <S.RemoveFilterButton onClick={clearAll}>Xóa tất cả</S.RemoveFilterButton>
    </S.Filter>
  )
}

export default FilterPanel
