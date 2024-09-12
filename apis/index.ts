import authenticatedRequest from './request'
import { apiRequestType } from './type'

export type queryType = {
  [key: string]: any
}

export type APIType = {
  [key: string]: {
    post: apiRequestType
    get: apiRequestType
    put: apiRequestType
    delete: apiRequestType
    patch: apiRequestType
  }
}

const routes = {
  auth: '/auth',
}

const buildAPIObject = (routes: { [key: string]: string }) => {
  const API: APIType = {}

  for (const key in routes) {
    API[key] = {
      post: authenticatedRequest(routes[key], 'POST'),
      get: authenticatedRequest(routes[key], 'GET'),
      put: authenticatedRequest(routes[key], 'PUT'),
      delete: authenticatedRequest(routes[key], 'DELETE'),
      patch: authenticatedRequest(routes[key], 'PATCH'),
    }
  }

  return API
}

const API = buildAPIObject(routes)

export default API
