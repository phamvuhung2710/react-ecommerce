import styled from 'styled-components'
import Dropdown from '../Dropdown/Dropdown'

export const SortBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: rgba(0, 0, 0, 0.03);
  padding: 1.25rem 1.5rem;
  border-radius: 2px;
  margin-bottom: 1.5rem;
`
export const SortBarLabel = styled.div``
export const SortByOptions = styled.div`
  flex: 0 0 auto;
  cursor: pointer;
  background: transparent;
  margin-left: 1rem;
  height: 3.25rem;
  padding: 0 1.5rem;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  height: 100%;
  text-align: center;
  &.active {
    color: #fff;
    background: #ee4d2d;
  }
`
export const SortByOptionsOption = styled.div`
  margin: 0 1rem;
  padding: 0.7rem 2rem;
  border-radius: 5px;
  background: #fff;
  transition: background 0.25s linear;
  &.active {
    background: linear-gradient(
      to top,
      rgba(255, 122, 147, 1),
      rgba(255, 122, 147, 0.5)
    );
    color: #fff;
  }
`

// export const SortByPrice = styled.select`
//   flex: 0 0 auto;
//   margin-left: 1rem;
//   height: 3.25rem;
//   border: 0;
//   padding: 0 1.5rem;
//   &.active {
//     color: #ee2d2d;
//   }
// `

export const SortByPrice = styled(Dropdown)`
  z-index: 10;
`

export const MiniPageController = styled.div`
  display: flex;
  align-items: center;
`
export const MiniPageControllerState = styled.div`
  display: flex;
`
export const MiniPageControllerCurrentState = styled.div`
  color: rgba(255, 122, 147, 1);
`
export const MiniPageControllerTotalState = styled.div``

export const ButtonController = styled.button`
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  width: 3.6rem;
  height: 3.4rem;
  border-radius: 2px;
  border: 0;
  background: ${({ disabled }) => (disabled ? '#f9f9f9' : '#fff')};
  svg {
    width: 0.625rem;
    height: 0.625rem;
    fill: ${({ disabled }) => (disabled ? '#ccc' : '#555')};
    margin-top: 0.125rem;
  }
`
export const ButtonControllerPrev = styled(ButtonController)`
  margin-left: 2rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 1px solid #f2f2f2;
`
export const ButtonControllerNext = styled(ButtonController)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`

export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`
