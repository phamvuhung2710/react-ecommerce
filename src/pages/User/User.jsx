import React from 'react'
import PropTypes from 'prop-types'
import * as S from './user.style'
import { path } from 'src/constants/path'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'
import Profile from './Profile/Profile'
import Password from './Password/Password'
import Purchase from './Purchase/Purchase'
import LocalStorage from 'src/constants/localStorage'

User.propTypes = {}

function User(props) {
  const { email, name } = JSON.parse(localStorage.getItem(LocalStorage.user))
  return (
    <div>
      <S.Container className="container">
        <S.Sidebar>
          <S.Brief>
            <S.BriefAvatar to={path.profile}>
              <img src="/img/anh-4.jpg" alt="" />
            </S.BriefAvatar>
            <S.BriefRight>
              <S.BriefUsername>{name || email}</S.BriefUsername>
              <S.BriefEdit to={path.profile}>
                <svg
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: 4 }}
                >
                  <path
                    d="M8.54 0L6.987 1.56l3.46 3.48L12 3.48M0 8.52l.073 3.428L3.46 12l6.21-6.18-3.46-3.48"
                    fill="#9B9B9B"
                    fillRule="evenodd"
                  />
                </svg>
                Sửa hồ sơ
              </S.BriefEdit>
            </S.BriefRight>
          </S.Brief>
          <S.SidebarMenu>
            <S.SidebarMenuEntry to={path.profile}>
              <S.SidebarMenuEntryIcon>
                <img src="/img/icons8-user-64.png" alt="" />
              </S.SidebarMenuEntryIcon>
              Tài khoản của tôi
            </S.SidebarMenuEntry>

            <S.SidebarMenuEntry to={path.password}>
              <S.SidebarMenuEntryIcon>
                <img src="/img/icons8-password-64.png" alt="" />
              </S.SidebarMenuEntryIcon>
              Đổi mật khẩu
            </S.SidebarMenuEntry>

            <S.SidebarMenuEntry to={path.purchase}>
              <S.SidebarMenuEntryIcon>
                <img src="/img/icons8-shopping-cart-64.png" alt="" />
              </S.SidebarMenuEntryIcon>
              Đơn mua
            </S.SidebarMenuEntry>
          </S.SidebarMenu>
        </S.Sidebar>
        <S.Main>
          <Switch>
            <Route path={path.user} exact>
              <Redirect to={path.profile} />
            </Route>

            <Route path={path.profile}>
              <Profile />
            </Route>

            <Route path={path.password}>
              <Password />
            </Route>

            <Route path={path.purchase}>
              <Purchase />
            </Route>
          </Switch>
        </S.Main>
      </S.Container>
    </div>
  )
}

export default User
