import styled from 'styled-components'

export const RatingStarsContainer = styled.div`
  display: block;
  align-items: center;
  padding: 0.5rem 0;
  cursor: pointer;
  &.active {
    background-color: #ebebeb;
    border-radius: 1rem;
  }
  svg {
    width: 14px;
    margin-right: 5px;
  }
`
