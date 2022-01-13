export function curry(fn) {
  return function (...args) {
    const allArguments = []

    function a(...args) {
      allArguments.push(...args)
      if (allArguments.length >= fn.length) {
        return fn(...allArguments)
      } else {
        return a
      }
    }

    return a(...args)
  }
}
