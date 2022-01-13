import { hasFunctionARestParameter } from './hasFunctionARestParameter.js'

export function curry(fn) {
  const functionHasARestParameter = hasFunctionARestParameter(fn)

  return function (...args) {
    const allArguments = []

    function a(...args) {
      allArguments.push(...args)
      if (!functionHasARestParameter && allArguments.length >= fn.length) {
        return a.value()
      } else {
        return a
      }
    }

    a.value = function () {
      return fn(...allArguments)
    }

    return a(...args)
  }
}
