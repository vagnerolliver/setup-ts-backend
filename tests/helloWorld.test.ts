import HelloWorld from '../src/helloWorld'

describe('HellWorld', () => {
  test('should call get and return true', () => {
    const helloWorld = new HelloWorld()
    expect(helloWorld.get()).toEqual(true)
  })
})
