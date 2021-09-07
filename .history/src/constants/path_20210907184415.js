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
  password() {
    return this.user + '/password'
  },
  purchase: `${USER}/purchase`,
  notFound: '*'
}
