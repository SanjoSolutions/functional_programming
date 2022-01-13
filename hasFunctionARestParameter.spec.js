import { hasFunctionARestParameter } from './hasFunctionARestParameter.js'

describe('hasFunctionARestParameter', () => {
  it('works for multiple calls', () => {
    function f(...args) {

    }

    expect(hasFunctionARestParameter(f)).toEqual(true)
    expect(hasFunctionARestParameter(f)).toEqual(true)
  })
})
