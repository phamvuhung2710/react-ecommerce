import { Link, NavLink as NavLinkSecond } from 'react-router-dom'
import { Button, ButtonLink } from 'src/assets/styles/utils'
import styled from 'styled-components'
import { Drawer } from '../Popover/popover.style'

export const StyledHeader = styled.header`
  background: #fef9f3;
  width: 100%;
  min-width: max-content;
  height: 80px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 100;
`

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
`

export const Logo = styled(Link)`
  flex-grow: 1;
  margin-right: 4rem;
  display: flex;
  align-items: center;
`

export const ImageLogo = styled.img`
  width: 70%;
  height: 100%;
`

export const Menu = styled.ul`
  flex-grow: 7;
  display: flex;
  justify-content: center;
`

export const MenuItem = styled(NavLinkSecond)`
  color: #342e48;
  font-size: 1.6rem;
  font-weight: 400;
  transition: all 0.2s linear;
  padding: 0.5rem 2rem;
  position: relative;

  /* &:hover {
    cursor: pointer;
    color: #fec673;
    font-weight: 500;
    &::before {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: linear-gradient(
        to top,
        rgba(252, 149, 70, 1) 35%,
        rgba(254, 214, 119, 1) 100%
      );
      transform: translateX(-50%);
    }
  } */
`

export const StyledForm = styled.form`
  position: relative;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: #fff;
  height: 5rem;
  width: 300px;
  border-radius: 4rem;
  /* box-shadow: 0 10px 20px -15px rgba(103, 96, 112, 0.5); */
`

export const IConSearch = styled.div`
  svg {
    color: #fff;
    fill: currentColor;
    width: 24px;
    height: 24px;
  }
`

export const StyledInput = styled.input`
  /* flex-grow: 1; */
  border: 0;
  padding-left: 1rem;
  height: 100%;
  border-radius: 4rem;
  /* font-family: "Inter", sans-serif; */
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  color: #7a7482;
`

export const Cart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 0;
  margin-left: 2rem;
`

export const CartContainer = styled.div`
  position: relative;
`

export const CartIcon = styled(Link)`
  padding: 10px;
  display: inline-block;
  position: relative;
  svg {
    color: #fe6663;
    stroke: #fe6663;
    fill: currentColor;
    width: 26px;
    height: 26px;
  }

  img {
    width: 45%;
    margin-left: auto;
  }

  &:before {
    content: '';
    height: 50%;
    width: 2px;
    border-radius: 1rem;
    background-color: #888;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  &:after {
    content: '';
    height: 50%;
    width: 100%;
    border-radius: 1rem;
    background-color: transparent;
    position: absolute;
    top: 100%;
    left: 0;
    transform: translateY(-50%);
  }
`

export const CartNumberBadge = styled.div`
  position: absolute;
  border-radius: 2.4rem;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  justify-content: center;
  color: #ffffff;
  background: linear-gradient(
    to top,
    rgba(252, 149, 70, 1) 35%,
    rgba(254, 214, 119, 1) 100%
  );
  line-height: 1;
  top: 0;
  right: 0;
  transform: translate(30%, -30%);
`

export const PopoverContent = styled.div`
  box-shadow: 0 1px 3.125rem 0 rgb(0 0 0 / 20%);
  border-radius: 0.125rem;
  overflow: hidden;
  background-color: #fff;
  width: 40rem;
`

export const PopoverTitle = styled.div`
  padding: 1.5rem 0 2rem 1rem;
  color: rgba(0, 0, 0, 0.5);
  text-transform: capitalize;
`

export const MiniProductCart = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`

export const MiniProductCartImg = styled.img`
  flex-shrink: 1;
  width: 4rem;
  height: 4rem;
  border: 1px solid rgba(0, 0, 0, 0.09);
`

export const MiniProductCartTitle = styled.div`
  flex-grow: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding-left: 1rem;
`

export const MiniProductCartPrice = styled.div`
  margin-left: 4rem;
  flex-shrink: 1;
  color: rgba(252, 149, 70, 1);
`

export const PopoverFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`

export const MoreProduct = styled.div`
  flex-grow: 1;
  text-transform: capitalize;
`

export const ButtonShowCart = styled(ButtonLink)`
  height: 3.5rem;
  padding: 1px 15px;
  text-transform: capitalize;
  flex-shrink: 0;
  background: linear-gradient(
    to top,
    rgba(252, 149, 70, 1) 35%,
    rgba(254, 214, 119, 1) 100%
  );
  border-radius: 4px;
`

export const UserAccount = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  padding: 1rem 0;
  background-color: transparent;
`

export const User = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: #fff;
  cursor: pointer;
  margin-left: 1rem;
  margin-right: 1rem;
  ${Drawer} {
    width: 15rem;
    top: 135%;
  }
  &:before {
    position: absolute;
    right: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 2rem;
    transform: translateY(100%);
  }
`

export const UserImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: cover;
`

export const Username = styled.div`
  text-align: center;
  line-height: 1.5;
  padding-left: 5px;
  max-width: 12rem;
  color: #ff7a93;
  font-weight: 500;
  font-size: 1.6rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const UserLink = styled(Link)`
  color: rgba(0, 0, 0, 0.8);
  padding: 1rem 0 1rem 1.5rem;
  display: block;
  width: 100%;
  text-align: left;
  &:hover {
    background-color: #fafafa;
    color: #ff7a93;
  }
`

export const UserButton = styled.button`
  color: rgba(0, 0, 0, 0.8);
  padding: 1rem 0 1rem 1.5rem;
  display: block;
  background: transparent;
  border: 0;
  width: 100%;
  text-align: left;
  &:hover {
    background-color: #fafafa;
    color: #ff7a93;
  }
`

export const NavLink = styled(Link)`
  display: inline-block;
  color: rgba(254, 102, 99, 0.8);
  border-radius: 1rem;
  font-weight: 500;
  font-size: 1.4rem;
  transition: all 0.2s linear;
  &:hover {
    color: rgba(254, 102, 99, 1);
    transform: scale(1.1);
  }
`

export const RegisterOrLogin = styled.div`
  display: flex;
  margin-left: 2rem;
`

export const Separate = styled.div`
  margin: 0 5px;
  color: #bbb;
`
