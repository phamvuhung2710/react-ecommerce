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
  password: `${USER}/password`,
  purchase: `${USER}/purchase`,
  notFound: '*'
}
