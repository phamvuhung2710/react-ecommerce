import axiosClient from './axiosClient'

const URL = '/categories'

const categoryApi = {
  getCategories() {
    return axiosClient.get(URL)
  }
}

export default categoryApi
