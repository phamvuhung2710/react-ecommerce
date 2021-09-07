import React, { useEffect, useState } from 'react'
import * as S from './header.style'
import usePopover from 'src/hooks/usePopover'
import Popover from '../Popover/Popover'
import { path } from 'src/constants/path'
import { logout } from 'src/pages/Auth/auth.slice'
import { useDispatch, useSelector } from 'react-redux'
import { useAuthenticated } from 'src/hooks/useAuthenticated'
import { useHistory } from 'react-router-dom'
import useQuery from 'src/hooks/useQuery'
import { formatMoney } from 'src/utils/helper'
import { useRouteMatch } from 'react-router-dom'
import { unwrapResult } from '@reduxjs/toolkit'

Header.propTypes = {}

function Header() {
  const match = useRouteMatch()
  const authenticated = useAuthenticated()
  const profile = useSelector(state => state.auth.profile)
  const { activePopover, showPopover, hidePopover } = usePopover()
  const [isUserPopover, setIsUserPopover] = useState(false)
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState('')
  const history = useHistory()
  const query = useQuery()
  const purchases = useSelector(state => state.cart.purchases)

  useEffect(() => {
    const { name = '' } = query
    setSearchValue(name)
  }, [query])

  const onChangeSearch = event => {
    setSearchValue(event.target.value)
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  const handleShowPopoverCart = () => {
    setIsUserPopover(false)
    showPopover()
  }

  const handleShowPopoverUser = () => {
    setIsUserPopover(true)
    showPopover()
  }

  const search = event => {
    event.preventDefault()
    history.push(path.product + `?name=${searchValue}`)
  }

  return (
    <S.StyledHeader>
      <div className="container">
        {/* <Navbar /> */}
        <S.HeaderWrap>
          <S.Logo to="/">
            <S.ImageLogo src="/img/logo-foody.png" />
          </S.Logo>
          <S.Menu>
            <S.MenuItem
              activeClassName={match.url === path.home ? 'menu--active' : ''}
              to={path.home}
            >
              Trang chủ
            </S.MenuItem>
            <S.MenuItem
              activeClassName={match.url === path.product ? 'menu--active' : ''}
              to={path.product}
            >
              Sản phẩm
            </S.MenuItem>
            <S.MenuItem
              activeClassName={match.url === path.cart ? 'menu--active' : ''}
              to={path.cart}
            >
              Giỏ hàng
            </S.MenuItem>
            {/* <S.MenuItem to={path.user}>Tài khoản</S.MenuItem> */}
          </S.Menu>
          <S.StyledForm onSubmit={search}>
            <S.IConSearch>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="d7e-0f24ac d7e-72271e"
              >
                <path
                  d="M10 2a8 8 0 016.32 12.905l5.387 5.388-1.414 1.414-5.388-5.386A8 8 0 1110 2zm0 2a6 6 0 100 12 6 6 0 000-12z"
                  fill="#fe6663"
                  fillRule="nonzero"
                />
              </svg>
            </S.IConSearch>
            <S.StyledInput
              placeholder="Search"
              onChange={onChangeSearch}
              value={searchValue}
            />
            <S.Cart
              onMouseEnter={handleShowPopoverCart}
              onMouseLeave={hidePopover}
            >
              <S.CartContainer>
                <S.CartIcon to="/cart">
                  <svg
                    viewBox="0 0 26.6 25.6"
                    className="shopee-svg-icon navbar__link-icon icon-shopping-cart-2"
                  >
                    <polyline
                      fill="#fe6663"
                      points="2 1.7 5.5 1.7 9.6 18.3 21.2 18.3 24.6 6.1 7 6.1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit={10}
                      strokeWidth="2.5"
                    />
                    <circle cx="10.7" cy={23} r="2.2" stroke="none" />
                    <circle cx="19.7" cy={23} r="2.2" stroke="none" />
                  </svg>
                  {/* <img src="/img/shopping-cart.png" alt="#" /> */}
                </S.CartIcon>
                <Popover active={!isUserPopover && activePopover}>
                  <S.PopoverContent>
                    <S.PopoverTitle>Sản phẩm mới thêm</S.PopoverTitle>
                    {purchases &&
                      purchases.length > 0 &&
                      purchases.slice(0, 5).map(purchase => (
                        <S.MiniProductCart key={purchase._id}>
                          <S.MiniProductCartImg src={purchase.product.image} />
                          <S.MiniProductCartTitle>
                            {purchase.product.name}
                          </S.MiniProductCartTitle>
                          <S.MiniProductCartPrice>
                            đ{formatMoney(purchase.product.price)}
                          </S.MiniProductCartPrice>
                        </S.MiniProductCart>
                      ))}

                    <S.PopoverFooter>
                      <S.MoreProduct>
                        {purchases && purchases.length > 5 && (
                          <span>{purchases.length - 5} sản phẩm vào giỏ</span>
                        )}
                      </S.MoreProduct>
                      <S.ButtonShowCart to={path.cart}>
                        Xem giỏ hàng
                      </S.ButtonShowCart>
                    </S.PopoverFooter>
                  </S.PopoverContent>
                </Popover>
              </S.CartContainer>
            </S.Cart>
            {purchases && purchases.length > 0 && (
              <S.CartNumberBadge>{purchases.length}</S.CartNumberBadge>
            )}
          </S.StyledForm>
          <S.UserAccount>
            {authenticated && (
              <span>
                <S.User
                  onMouseEnter={handleShowPopoverUser}
                  onMouseLeave={hidePopover}
                >
                  <S.UserImage src="/img/anh-4.jpg" />
                  <S.Username>{profile.name || profile.email}</S.Username>
                  <Popover active={isUserPopover && activePopover}>
                    <S.UserLink to={path.user}>Tài khoản của tôi</S.UserLink>
                    <S.UserLink to={path.purchase}>Đơn mua</S.UserLink>
                    <S.UserButton onClick={handleLogout}>
                      Đăng xuất
                    </S.UserButton>
                  </Popover>
                </S.User>
              </span>
            )}
            {!authenticated && (
              <S.RegisterOrLogin>
                <span>
                  <S.NavLink to={path.register}>Đăng ký</S.NavLink>
                </span>
                <S.Separate> / </S.Separate>
                <span>
                  <S.NavLink to={path.login}>Đăng nhập</S.NavLink>
                </span>
              </S.RegisterOrLogin>
            )}
          </S.UserAccount>
        </S.HeaderWrap>
      </div>
    </S.StyledHeader>
  )
}

export default Header
