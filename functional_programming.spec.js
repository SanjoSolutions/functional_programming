import { sum, plus } from './arithmetic.js'
import { pipe } from './functional_programming.js'

describe('pipe', () => {
  it('pipes multiple functions into a new function', () => {
    const pipedFunction = pipe(sum, value => plus(value, 1))
    const result = pipedFunction([1, 2])
    expect(result).toEqual(4)
  })
})
