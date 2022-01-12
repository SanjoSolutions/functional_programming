import { processValueThroughFunctions } from './process.js'

export function pipe(...functions) {
  return function (value) {
    return processValueThroughFunctions(value, functions)
  }
}
