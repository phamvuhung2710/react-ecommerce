import { Button } from 'src/assets/styles/utils'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import BaseInputNumber from '../BaseInputNumber/BaseInputNumber'

export const Filter = styled.div``

export const StyleNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: #342e48;
`

export const FilterCategory = styled.div`
  display: flex;
  align-items: center;
`

export const FilterCategoryIcon = styled.img`
  width: 28px;
  margin-left: -10px;
  margin-right: 4px;
`

export const FilterCategoryName = styled.p`
  font-size: 1.7rem;
  font-weight: 500;
  color: #342e48;
`

export const CategoryList = styled.div`
  margin: 1.5rem 0 4rem 0;
`

export const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
`

export const CategoryItemIcon = styled.img`
  margin-right: 5px;
  width: 12px;
`

export const CategoryName = styled(NavLink)`
  color: black;
`

export const FilterSearch = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;
`

export const FilterSearchIcon = styled.img`
  margin-right: 4px;
  /* font-size: 1.4rem; */
  width: 28px;
  margin-left: -10px;
`

export const FilterSearchText = styled.div`
  font-size: 1.7rem;
  font-weight: 500;
  color: #342e48;
`

export const FilterGroup = styled.div`
  border-bottom: 1px solid #eee;
  margin: 2rem 0;
  padding-bottom: 3rem;
`

export const FilterGroupHeader = styled.div`
  display: flex;
  margin-bottom: 1rem;
  p {
    margin: 1rem 0;
    font-weight: 500;
    font-size: 1.5rem;
  }
`

export const PriceRangeGroup = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0 1.5rem;
`

export const PriceRangeInput = styled(BaseInputNumber)`
  width: 10rem;
  height: 4rem;
  text-align: center;
  padding: 15px 10px;
  border-radius: 5px;
  border: 1px solid #eee;
  outline: none;
  &:focus {
    border-color: #fec474;
  }
`

export const PriceRangeLine = styled.div`
  flex: 1;
  height: 1px;
  background: #bdbdbd;
  margin: 0 1.6rem;
`

export const PriceErrorMessage = styled.div`
  margin: 2rem 0;
  font-size: 1.2rem;
  text-align: center;
  color: #ff424f;
`

export const PriceRangeButton = styled(Button)`
  display: flex !important;
  align-items: center;
  justify-content: center;
  width: 16rem;
  height: 4.5rem;
  border-radius: 1rem;
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  display: block;
  background-image: linear-gradient(
    75deg,
    #ffc371 0%,
    #ff7a93 51%,
    #ff7a93 100%
  );
  &:hover {
    background-image: linear-gradient(
      75deg,
      #ffc371 0%,
      #ff7a93 51%,
      #ff7a93 100%
    );
  }
`

export const RemoveFilterButton = styled(Button)`
  display: flex !important;
  align-items: center;
  justify-content: center;
  width: 16rem;
  height: 4.5rem;
  border-radius: 1rem;
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  display: block;
  background-image: linear-gradient(
    75deg,
    #ffc371 0%,
    #ff7a93 51%,
    #ff7a93 100%
  );
  &:hover {
    background-image: linear-gradient(
      75deg,
      #ffc371 0%,
      #ff7a93 51%,
      #ff7a93 100%
    );
  }
`

export const FilterDiscount = styled.div``
export const FilterDiscountItem = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`
export const FilterDiscountName = styled.div``

export const FilterService = styled.div``
export const FilterServiceItem = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`
export const FilterServiceName = styled.div``

export const FilterCheckbox = styled.label`
  /* display: flex;
  justify-content: center; */
  cursor: pointer;
`

export const FilterCheckboxInput = styled.input`
  display: none;
  &:checked + .filter-checkbox__style {
    background: linear-gradient(
      to top,
      rgba(254, 196, 116, 1),
      rgba(254, 196, 116, 0.7)
    );
    i {
      display: block;
    }
    border: none;
  }
`

export const FilterCheckboxStyle = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #aaa;
  margin-right: 5px;
`

export const FilterCheckboxStyleIcon = styled.i`
  color: white;
  display: none;
  border-radius: 4px;
`
