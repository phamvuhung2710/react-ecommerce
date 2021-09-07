import axiosClient from './axiosClient'

const URL = '/products'

const productApi = {
  getProducts(config) {
    return axiosClient.get(URL, {
      params: config
    })
  },
  getProductDetail(id) {
    return axiosClient.get(`${URL}/${id}`)
  }
}

export default productApi
