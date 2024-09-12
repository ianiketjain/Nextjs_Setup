export type queryType = {
  [key: string]: any
}

export type apiRequestType = (args: {
  body?: {
    [key: string]: any
  }
  param?: any[]
  query?: queryType
}) => Promise<any>

export type APIType = {
  [key: string]: {
    post: apiRequestType
    get: apiRequestType
    put: apiRequestType
    delete: apiRequestType
    patch: apiRequestType
  }
}
