import React from 'react'
import PropTypes from 'prop-types'
import * as S from './productItem.style'
import { Link } from 'react-router-dom'
import { formatK, formatMoney, generateNameId } from 'src/utils/helper'
import { path } from 'src/constants/path'
import ProductRating from '../ProductRating/ProductRating'

ProductItem.propTypes = {
  product: PropTypes.object
}

function ProductItem({ product }) {
  return (
    <S.Product>
      <S.CustomLink to={path.product + `/${generateNameId(product)}`}>
        <S.ProductItem>
          <S.ProductFrame>
            <S.ProductImage src={product.image} alt={product.name} />
          </S.ProductFrame>
          <S.ProductDetail>
            <S.ProductTitle>{product.name}</S.ProductTitle>
            <S.ProductDesc>
              <S.ProductItemSold>
                <span>{formatK(product.sold)}</span>
                <span>Đã bán</span>
              </S.ProductItemSold>
              <S.ProductStar>
                <S.ProductStarIcon className="fas fa-star" />
                <S.ProductNumberStar>
                  {product.rating.toFixed(1)}
                </S.ProductNumberStar>
              </S.ProductStar>
            </S.ProductDesc>
            <S.ProductDescCart>
              <S.ProductPrice>
                <S.ProductPriceOriginal>
                  đ{formatMoney(product.price_before_discount)}
                </S.ProductPriceOriginal>
                <S.ProductPriceSale>
                  đ{formatMoney(product.price)}
                </S.ProductPriceSale>
              </S.ProductPrice>
              <S.ProductDescCartIcon>
                <S.ProductDescCartBadge className="fas fa-cart-plus" />
              </S.ProductDescCartIcon>
            </S.ProductDescCart>
          </S.ProductDetail>
        </S.ProductItem>
      </S.CustomLink>
    </S.Product>
  )
}

export default ProductItem
