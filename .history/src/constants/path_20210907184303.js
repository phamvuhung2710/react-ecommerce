export const path = {
  home: '/',
  cart: '/cart',
  product: '/product',
  productDetail: '/product/:productId',
  login: '/login',
  register: '/register',
  user: '/user',
  get profile() {
    return this.user + '/profile'
  },
   get password() {
    return this.user + '/password'
  },
  get purchase() {
    return this.user + '/purchase'
  },
  notFound: '*'
}
