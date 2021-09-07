import styled from 'styled-components'

export const Dropdown = styled.div`
  width: 100%;
  position: relative;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin: 0 1rem;
  &:first-child,
  &:last-child {
    margin: 0;
  }
`

export const DropdownSelect = styled.div`
  background-color: white;
  padding: 1.4rem;
  border-radius: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  height: 100%;
`

export const DropdownSelected = styled.span``

export const DropdownCaret = styled.img`
  width: 8%;
`

export const DropdownList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 1rem;
  padding: 1.4rem;
  background-color: white;
  border-radius: 8px;
  display: block;
  border: 1px solid #eee;
  overflow-y: scroll;
  max-height: 240px;
  &::before {
    content: '';
    height: 1rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: transparent;
    transform: translateY(-100%);
  }
  & > .show {
    display: block;
  }

  &::-webkit-scrollbar {
    width: 8px;
    background: #0d141f;
    background: #81878f;
    background: #f1f2f3;
    border-radius: 0 5px 5px 0;
  }

  &::-webkit-scrollbar-thumb {
    background: #525861;
    background: #81878f;
    border-radius: 0 5px 5px 0;
  }
`

export const DropdownItem = styled.div`
  padding: 1.4rem;
  color: #47536b;
  transition: all 0.25s ease;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    color: #33ccff;
    background-color: #f1fbff;
  }
`
