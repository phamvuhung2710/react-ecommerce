const USER = '/user'

export const path = {
  home: '/',
  cart: '/cart',
  product: '/product',
  productDetail: '/product/:productId',
  login: '/login',
  register: '/register',
  user: USER,
  profile: `${USER}/profile`,
   get password() {
    return this.user + '/password'
  },
  get purchase() {
    return this.user + '/purchase'
  },
  notFound: '*'
}
