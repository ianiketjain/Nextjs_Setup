import { apiRequestType, queryType } from './type'
import { catchAsync, buildURL } from './root'

const authenticatedRequest = (BASE_URL: string, method: string): apiRequestType => {
  return catchAsync(async ({ body, param, query }: any) => {
    const url = buildURL(BASE_URL, param, query)
    const headers: any = {}

    if (method !== 'GET') {
      headers['Content-Type'] = 'application/json'
    }

    const options: any = {
      method,
      headers,
    }

    if (method !== 'GET') {
      options.body = JSON.stringify(body ? body : {})
    }

    const response = await fetch(url, options)
    return response
  }, BASE_URL)
}

export default authenticatedRequest
