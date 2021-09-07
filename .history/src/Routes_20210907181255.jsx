import React, { lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import Fallback from './components/Fallback/Fallback'
import ProductDetail from './components/ProductDetail/ProductDetail'
import { path } from './constants/path'
import AuthenticatedGuard from './guard/AuthenticatedGuard'
import UnauthenticatedGuard from './guard/UnauthenticatedGuard'
import CartLayout from './layouts/CartLayout/CartLayout'
import MainLayout from './layouts/MainLayout/MainLayout'
import RegisterLayout from './layouts/RegisterLayout/RegisterLayout'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import Product from './pages/Product/Product'
import User from './pages/User/User'

const Home = lazy(() => import('./pages/Home/Home'))
const Home = lazy(() => import('./pages/Home/Home'))

export default function Routes() {
  return (
    <Switch>
      <Route path={path.home} exact>
        <MainLayout>
          <Home />
        </MainLayout>
      </Route>

      <Route path={path.product} exact>
        <MainLayout>
          <Product />
        </MainLayout>
      </Route>

      <Route path={path.productDetail} exact>
        <MainLayout>
          <ProductDetail />
        </MainLayout>
      </Route>

      <Route path={path.login}>
        <UnauthenticatedGuard>
          <RegisterLayout title="Đăng nhập">
            <Login />
          </RegisterLayout>
        </UnauthenticatedGuard>
      </Route>

      <Route path={path.register}>
        <UnauthenticatedGuard>
          <RegisterLayout title="Đăng ký">
            <Register />
          </RegisterLayout>
        </UnauthenticatedGuard>
      </Route>

      <Route path={path.user}>
        <AuthenticatedGuard>
          <MainLayout>
            <User />
          </MainLayout>
        </AuthenticatedGuard>
      </Route>

      <Route path={path.cart}>
        <AuthenticatedGuard>
          <CartLayout>
            <Cart />
          </CartLayout>
        </AuthenticatedGuard>
      </Route>

      <Route path={path.notFound}>
        <NotFound />
      </Route>
    </Switch>
  )
}
