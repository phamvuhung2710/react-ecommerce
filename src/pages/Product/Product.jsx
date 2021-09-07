import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import FilterPanel from 'src/components/FilterPanel/FilterPanel'
import { Background } from './product.style'
import SearchItemResult from 'src/components/SearchItemResult/SearchItemResult'
import * as S from './product.style'
import { useDispatch } from 'react-redux'
import { getCategories, getProducts } from './product.slice'
import { unwrapResult } from '@reduxjs/toolkit'
import useQuery from 'src/hooks/useQuery'

Product.propTypes = {}

function Product(props) {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState({
    products: [],
    pagination: {}
  })
  const [filters, setFilters] = useState({})
  const dispatch = useDispatch()
  const query = useQuery()

  useEffect(() => {
    dispatch(getCategories())
      .then(unwrapResult)
      .then(res => {
        setCategories(res.data)
      })
  }, [dispatch])

  useEffect(() => {
    const _filters = {
      ...query,
      page: query.page || 1,
      limit: query.limit || 12,
      sortBy: query.sortBy || 'view'
    }
    setFilters(_filters)
    const params = {
      page: _filters.page,
      limit: _filters.limit,
      category: _filters.category,
      exclude: _filters.exclude,
      rating_filter: _filters.rating,
      price_max: _filters.maxPrice,
      price_min: _filters.minPrice,
      sort_by: _filters.sortBy,
      order: _filters.order,
      name: _filters.name
    }
    const _getProduct = async () => {
      const data = await dispatch(getProducts(params))
      const res = unwrapResult(data)
      setProducts(res.data)
    }
    _getProduct()
  }, [query, dispatch])

  return (
    <Background>
      <div className="container">
        <S.BackgroundWrap>
          <S.Side>
            <FilterPanel categories={categories} filters={filters} />
          </S.Side>

          <S.Main>
            <SearchItemResult products={products} filters={filters} />
          </S.Main>
        </S.BackgroundWrap>
      </div>
    </Background>
  )
}

export default Product
