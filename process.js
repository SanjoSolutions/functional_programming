export function process(value) {
  return {
    through(...functions) {
      return processValueThroughFunctions(value, functions)
    }
  }
}

export function processValueThroughFunctions(value, functions) {
  return functions.reduce((value, fn) => fn(value), value)
}
