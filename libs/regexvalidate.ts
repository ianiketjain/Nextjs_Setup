function IsContainSpecialChar(str: string) {
  const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
  return specialChars.test(str)
}

export { IsContainSpecialChar }
