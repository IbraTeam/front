import axios from 'axios'

export const apiInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`
})

export const requestInstance = axios.create({
  baseURL: `${import.meta.env.VITE_REQUEST_BACKEND_URL}/api`
})
