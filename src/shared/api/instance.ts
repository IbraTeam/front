import axios from 'axios'

export const apiInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`
})

export const vitalInstance = axios.create({
  baseURL: `${import.meta.env.VITE_VITAL_BACKEND_URL}/api`
})
