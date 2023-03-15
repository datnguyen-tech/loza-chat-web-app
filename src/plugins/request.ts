import axios from 'axios'
import Cookies from 'js-cookie'
import type { Message } from 'element-plus'

const Notify = {} as Message
const API_URL: string | undefined = import.meta.env.VUE_APP_BASE_API

const request = axios.create({
  baseURL: API_URL,
  withCredentials: false
})

request.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded'
request.defaults.headers.common['Authorization'] = Cookies.get('access_token')
  ? 'Bearer ' + Cookies.get('access_token')
  : ''

request.interceptors.request.use(request => {
  return request
})
request.interceptors.response.use(
  response => {
    return response
  },
  error => {
    const { config, data, status } = error.response

    if (status === 401 || data.errorCode === 401) {
      Cookies.remove('access_token')
      Cookies.remove('refresh_token')
      request.defaults.headers.common['Authorization'] = ''
      location.href = '/login'
    }
    if (status === 400) {
      Notify.error({ message: data.message, duration: 5000 })
    }
    if (!error.response || error.response.status >= 500) {
      Notify.error({ message: 'Internal Server', duration: 5000 })
      return Promise.reject(error)
    }
    return Promise.reject(error)
  }
)

export default request
