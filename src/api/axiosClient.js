import axios from 'axios'
import { toast } from 'react-toastify'
import LocalStorage from 'src/constants/localStorage'

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem(LocalStorage.accessToken)
    if (accessToken) {
      config.headers.authorization = accessToken
    }

    return config
  },
  function (error) {
    return Promise.reject(error.response)
  }
)

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    if (response.status === 401) {
      toast.error(response.data.message, {
        position: 'top-center',
        autoClose: 3000
      })
    }
    const result = { ...response.data, status: response.status }
    return result
  },
  function ({ response }) {
    const result = { ...response.data, status: response.status }
    return Promise.reject(result)
  }
)

export default axiosClient
