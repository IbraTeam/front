import { AxiosError, AxiosRequestConfig } from 'axios'
import React from 'react'
import { apiInstance, vitalInstance } from '@/shared/api'
import { statusCodeErrors } from '@/shared/const'
import { parseFormResponseErrors } from '../helpers/parseFormErrorErrors'

interface UseRequestParams<T, D> {
  onMount?: boolean
  config?: AxiosRequestConfig<D>
  duration?: number
  onSuccess?: (data: T) => void
  onError?: (error?: string) => void
  onFormError?: (errors: FormError<D>[]) => void
  instance?: 'api' | 'vital'
}

export const useRequest = <T, D = never>({
  onMount = false,
  config = {},
  duration = 0,
  onSuccess,
  onError,
  onFormError,
  instance = 'api'
}: UseRequestParams<T, D>) => {
  const [data, setData] = React.useState<T | null>(null)
  const [error, setError] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)
  const [statusCode, setStatusCode] = React.useState<number | null>(null)

  const requestHandler = React.useCallback(async (config: AxiosRequestConfig<D>) => {
    setIsSuccess(false)
    setIsLoading(true)
    setError('')

    try {
      let response

      if (instance === 'api') {
        response = await apiInstance(config)
      } else {
        response = await vitalInstance(config)
      }

      setStatusCode(response.status)

      if (response.status >= 300) {
        throw new Error('Something went Wrong')
      }

      if (response.data) {
        setData(response.data)
      } else {
        setData(null)
      }

      setIsSuccess(true)
      if (!!onSuccess) {
        onSuccess(response.data)
      }
    } catch (catchReason: unknown) {
      const reason = catchReason as AxiosError<BaseResponse>
      const formReason = catchReason as AxiosError<FormErrorResponse<D>>
      const unknownReason = catchReason as AxiosError<Record<string, string>>

      const formErrors = formReason.response?.data.errors
      const unknownErrors = unknownReason.response?.data
      let errorMessage = reason.response?.data.message

      if (!!onFormError && !!formErrors) {
        const normalizedErrors = parseFormResponseErrors<D>(formErrors)
        onFormError(normalizedErrors)
      }

      if (!errorMessage && !formErrors) {
        const statusCode = reason.response?.status || 0
        errorMessage = statusCodeErrors[statusCode] || Object.values(unknownErrors || {}).join(', ')
        setError(errorMessage)
      }

      if (!!onError && !!errorMessage) {
        onError(errorMessage)
      }
    }

    setTimeout(() => {
      setIsLoading(false)
    }, duration)
  }, [])

  React.useEffect(() => {
    if (onMount && config) {
      requestHandler(config)
    }
  }, [])

  return {
    data,
    error,
    isLoading,
    isSuccess,
    statusCode,
    requestHandler
  }
}
