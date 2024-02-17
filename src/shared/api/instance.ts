import axios from 'axios'
import { USER_INFO_KEY } from '../const'

export const apiInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/`
})

apiInstance.interceptors.request.use(
  (config) => {
    const userInfo = JSON.parse(localStorage.getItem(USER_INFO_KEY) ?? '')

    if (!!userInfo) config.headers.Authorization = `Bearer ${userInfo.token}`

    return config
  },
  (error) => Promise.reject(error)
)
