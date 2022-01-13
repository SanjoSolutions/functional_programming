import { plus } from './arithmetic.js'
import { curry } from './curry.js'
import { plus as plus2 } from './plus.js'

describe('curry', () => {
  it('curries a function', () => {
    const curriedPlus = curry(plus)
    const a = curriedPlus(1)
    const b = a(2)
    expect(b).toEqual(3)
  })

  it('can also curry a function with a rest parameter', () => {
    const curriedPlus = curry(plus2)
    const a = curriedPlus(1)
    const b = a(2)
    const c = b.value()
    expect(c).toEqual(3)
  })
})
