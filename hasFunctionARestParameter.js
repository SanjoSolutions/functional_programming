const regExp = /^function[^(]+\([^)]*\.\.\.[^)]+\)/

export function hasFunctionARestParameter(fn) {
  return regExp.test(fn.toString())
}
