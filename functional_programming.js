export function pipe(...functions) {
  return function (value) {
    return functions.reduce((value, fn) => fn(value), value)
  }
}
