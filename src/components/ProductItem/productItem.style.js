import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Product = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  padding: 0 5px;
  margin: 10px 0;
`

export const CustomLink = styled(Link)`
  color: #342e48;
`
export const ProductItem = styled.div`
  background-color: rgba(233, 152, 251, 0.2);
  border-radius: 1rem;
  /* width: 23rem; */
  box-shadow: rgb(215 215 215 / 50%) 0px 4px 16px;
  transition: all 0.2s ease;
  /* padding: 2px 5px; */
  padding-bottom: 1rem;
  &:hover {
    box-shadow: 0 0.1rem 2rem 0 rgb(0 0 0 / 5%);
    transform: translateY(-0.1rem);
  }
`

export const ProductFrame = styled.div`
  /* background-color: transparent;
  text-align: center;
  border-radius: 1rem;
  margin: 1rem;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; */
  width: 100%;
  padding-top: 100%;
  position: relative;
`

export const ProductImage = styled.img`
  /* width: 80%;
  object-fit: cover; */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  object-fit: cover;
  vertical-align: bottom;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`

export const ProductDetail = styled.div`
  margin: 1rem;
`

export const ProductTitle = styled.div`
  font-weight: 600;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ProductDesc = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem 0;
  font-size: 1.2rem;
`

export const ProductItemSold = styled.div`
  background-color: #fff;
  padding: 5px;
  border-radius: 4px;

  span {
    margin-right: 5px;
  }
`

export const ProductStar = styled.div`
  display: flex;
`

export const ProductStarIcon = styled.div`
  color: #fbca6e;
  margin-right: 2px;
`

export const ProductNumberStar = styled.div``

export const ProductPrice = styled.div`
  font-weight: bold;
  font-size: 1.8rem;
  color: #e68095;
`

export const ProductPriceOriginal = styled.div`
  color: rgba(0, 0, 0, 0.54);
  text-decoration: line-through;
  margin-right: 5px;
  font-size: 1.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ProductPriceSale = styled.div`
  font-weight: bold;
  font-size: 1.8rem;
  color: #e68095;
`

export const ProductDescCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ProductDescCartIcon = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: linear-gradient(
    135deg,
    rgba(247, 203, 176, 1) 35%,
    rgba(253, 131, 144, 1) 100%
  );
`

export const ProductDescCartBadge = styled.i`
  color: #fff;
  font-size: 1.5rem;
`
