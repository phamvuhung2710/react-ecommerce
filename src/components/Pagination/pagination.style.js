import styled from 'styled-components'

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
`

export const PaginationItem = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  cursor: pointer;
  &.active {
    color: #fff;
    background: linear-gradient(
      to top,
      rgba(255, 122, 147, 1),
      rgba(255, 122, 147, 0.5)
    );
  }
`

export const PaginationButton = styled.i``

export const PaginationPrevButton = styled.i``

export const PaginationNextButton = styled.i``

const ButtonPaginate = styled.button`
  color: rgba(0, 0, 0, 0.4);
  min-width: 4rem;
  height: 3rem;
  margin: 0 1.5rem;
  border: none;
  background-color: transparent;
  font-size: 2rem;
  border-radius: 2px;
`

export const ButtonIcon = styled(ButtonPaginate)`
  svg {
    width: 1.4rem;
    height: 1.4rem;
    fill: currentColor;
  }
`

export const ButtonNoOutline = styled(ButtonPaginate)`
  &.active {
    color: #fff;
    background: #ee4d2d;
    transition: background 0.2s ease;
    &:hover {
      background: #f05d40;
    }
  }
`
