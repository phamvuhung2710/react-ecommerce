import axiosClient from './axiosClient'

const userApi = {
  updateMe(data) {
    const url = '/user'
    return axiosClient.put(url, data)
  }
}

export default userApi
