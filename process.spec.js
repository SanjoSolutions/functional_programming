import { process } from './process'
import { plus } from './arithmetic'

describe('process', () => {
  it('processes a value through multiple steps', () => {
    const result = process(2).through(value => plus(value, 1), value => plus(value, 2))
    const expectedResult = 2 + 1 + 2
    expect(result).toEqual(expectedResult)
  })
})
