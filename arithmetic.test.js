import { sum, plus } from './arithmetic.js'

describe('sum', () => {
  it('sums values', () => {
    const values = [1, 2, 3]
    debugger
    const result = sum(values)
    expect(result).toEqual(6)
  })
})

describe('plus', () => {
  it('adds two values', () => {
    const a = 1
    const b = 2
    const result = plus(a, b)
    expect(result).toEqual(3)
  })
})
