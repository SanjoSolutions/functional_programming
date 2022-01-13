import { plus } from './arithmetic.js'
import { curry } from './curry.js'

describe('curry', () => {
  it('curries a function', () => {
    const curriedPlus = curry(plus)
    const a = curriedPlus(1)
    const b = a(2)
    expect(b).toEqual(3)
  })
})
