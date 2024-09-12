import { clearLocalStorageData, clearSessionStorageData } from '@/libs/storage'
import { apiRequestType, queryType } from './type'

const toqueryString = (query: queryType) => {
  const queryString = Object.keys(query)
    .map((key) => `${key}=${encodeURIComponent(query[key])}`)
    .join('&')
  return '?' + queryString
}

export const buildURL = (BASE_URL: string, param: any[] | undefined, query: queryType | undefined) => {
  return `${BASE_URL}/${param ? param.join('/') + '/' : ''}${query ? toqueryString(query) : ''}`
}

export const catchAsync = (apiRequest: apiRequestType, BASE_URL: string): apiRequestType => {
  return async (args: any) => {
    try {
      const response = await apiRequest(args)
      const data = await response.json()

      const url = new URL(window.location.href)
      const jwt = url.searchParams.get('jwt')
      if (jwt !== null) {
        return data
      }

      if (data.code === 401 && data.message == 'Please authenticate') {
        clearLocalStorageData()
        clearSessionStorageData()
        window.location.href = `${process.env.subDomainUrl ?? ''}/Home/Login`
        return
      }
      return data
    } catch (error) {
      throw error
    }
  }
}
