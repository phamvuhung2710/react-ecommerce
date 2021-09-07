import { purchaseStatus } from 'src/constants/status'
import axiosClient from './axiosClient'

const URL = '/purchases'

const purchaseApi = {
  addToCart(data) {
    return axiosClient.post(`${URL}/add-to-cart`, data)
  },
  getCartPurchases() {
    return axiosClient.get(URL, {
      params: {
        status: purchaseStatus.inCart
      }
    })
  },
  updatePurchase(data) {
    return axiosClient.put(`${URL}/update-purchase`, data)
  },
  deletePurchases(data) {
    return axiosClient.delete(`${URL}`, {
      data
    })
  },
  buyPurchases(data) {
    return axiosClient.post(`${URL}/buy-products`, data)
  },
  getPurchases(status) {
    return axiosClient.get(URL, {
      params: {
        status
      }
    })
  }
}

export default purchaseApi
