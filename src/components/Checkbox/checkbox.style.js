import styled from 'styled-components'

export const Checkbox = styled.label`
  display: inline-block;
  position: relative;
  cursor: pointer;
  user-select: none;
`

export const CheckboxBox = styled.div`
  box-shadow: inset 0 2px 0 0 rgb(0 0 0 / 2%);
  width: 18px;
  height: 18px;
  border: 1px solid rgba(0, 0, 0, 0.14);
  border-radius: 2px;
  text-align: center;
  user-select: none;
  position: relative;
  :before {
    position: absolute;
    content: '';
    height: 5px;
    width: 9px;
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotate(-45deg);
    left: 3px;
    top: 3px;
    display: none;
  }
  :hover {
    box-shadow: inset 0 2px 1px 0 rgb(0 0 0 / 9%);
  }
`

export const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  :checked ~ ${CheckboxBox} {
    background: linear-gradient(
      to top,
      rgba(254, 196, 116, 1),
      rgba(254, 196, 116, 0.7)
    );
    border-color: rgba(254, 196, 116, 1);
  }
  :checked ~ ${CheckboxBox}:before {
    display: block;
  }
`
