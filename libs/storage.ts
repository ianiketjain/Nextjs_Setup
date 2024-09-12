export type LocalStorageInterface = {
  [key in 'ACCESS_TOKEN' | 'LOGIN_ID' | 'USERNAME' | 'USER_ROLE']: string
}

type SessionStorageInterface = {
  [key in 'USER_DATE']: string
}

const localStorageData: LocalStorageInterface = {
  ACCESS_TOKEN: 'accesstoken',
  LOGIN_ID: 'loginid',
  USERNAME: 'username',
  USER_ROLE: 'userrole',
}

const sessionStorageData: SessionStorageInterface = {
  USER_DATE: 'userdate',
}

const getLocalStorageData = (key: string) => {
  if (window && typeof window != undefined) {
    return localStorage.getItem(key)?.toString() ?? null
  } else {
    return null
  }
}

const setLocalStorageData = (key: string, value: string) => {
  if (window && typeof window != undefined) {
    localStorage.setItem(key, value)
  }
}

const removeLocalStorageData = (key: string) => {
  if (window && typeof window != undefined) {
    localStorage.removeItem(key)
  }
}

const clearLocalStorageData = () => {
  if (window && typeof window != undefined) {
    localStorage.clear()
  }
}

const getSessionStorageData = (key: string) => {
  if (window && typeof window != undefined) {
    return sessionStorage.getItem(key)
  } else {
    return null
  }
}

const setSessionStorageData = (key: string, value: string) => {
  if (window && typeof window != undefined) {
    sessionStorage.setItem(key, value)
  }
}

const removeSessionStorageData = (key: string) => {
  if (window && typeof window != undefined) {
    sessionStorage.removeItem(key)
  }
}

const clearSessionStorageData = () => {
  if (window && typeof window != undefined) {
    sessionStorage.clear()
  }
}

export { sessionStorageData, getSessionStorageData, setSessionStorageData, removeSessionStorageData, clearSessionStorageData }

export { localStorageData, getLocalStorageData, setLocalStorageData, removeLocalStorageData, clearLocalStorageData }
