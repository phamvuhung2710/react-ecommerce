import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Fallback from './components/Fallback/Fallback'
import { path } from './constants/path'
import AuthenticatedGuard from './guard/AuthenticatedGuard'
import UnauthenticatedGuard from './guard/UnauthenticatedGuard'
import CartLayout from './layouts/CartLayout/CartLayout'
import MainLayout from './layouts/MainLayout/MainLayout'
import RegisterLayout from './layouts/RegisterLayout/RegisterLayout'


const Home = lazy(() => import('./pages/Home/Home'))
const Product = lazy(() => import('./pages/Product/Product'))
const ProductDetail = lazy(() => import('./pages/ProductDetail/ProductDetail'))
const User = lazy(() => import('./pages/User/User'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound'))
const Cart = lazy(() => import('./pages/Cart/Cart'))
const Login = lazy(() => import('./pages/Login/Login'))
const Register = lazy(() => import('./pages/Register/Register'))
const ProductDetail = lazy(() => import('./pages/ProductDetail/ProductDetail'))

export default function Routes() {
  return (
    <Switch>
      <Route path={path.home} exact>
        <MainLayout>
          <Suspense fallback={<Fallback />}>
            <Home />
          </Suspense>
        </MainLayout>
      </Route>

      <Route path={path.product} exact>
        <MainLayout>
          <Suspense fallback={<Fallback />}>
            <Product />
          </Suspense>
        </MainLayout>
      </Route>

      <Route path={path.productDetail} exact>
        <MainLayout>
          <Suspense fallback={<Fallback />}>
            <ProductDetail />
          </Suspense>
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
