
describe('Text Ex-SumArray', () => {
  it('should return 0 if the parameter is null', () => {
    expect(sumArray(null)).toBe(0)
  })

  it('should return 0 if the parameter is undefined', () => {
    expect(sumArray([ ])).toBe(0)
  })

  it('should return 0 if the length of the parameter is one', () => {
    expect(sumArray([ 3 ])).toBe(0)
  })

  it('should return 0 if the length of the parameter is two', () => {
    expect(sumArray([ 3, 5 ])).toBe(0)
  })

  it('should return the sum of the values of the parameter, excluding the max and the min', () => {
    expect(sumArray([ 6, 2, 1, 8, 10 ])).toBe(16)
    expect(sumArray([ 0, 1, 6, 10, 10 ])).toBe(7) //he modificado el resultado requerido a 7, ya que si hay que descartar el máximo sobran los dos 10
    expect(sumArray([ -6, -20, -1, -10, -12 ])).toBe(-28)
    expect(sumArray([ -6, 20, -1, 10, -12 ])).toBe(3)
  })
})

describe('Text Ex-SumArray2', () => {
  it('should return 0 if the parameter is null', () => {
    expect(sumArray2(null)).toBe(0)
  })

  it('should return 0 if the parameter is undefined', () => {
    expect(sumArray2([ ])).toBe(0)
  })

  it('should return 0 if the length of the parameter is one', () => {
    expect(sumArray2([ 3 ])).toBe(0)
  })

  it('should return 0 if the length of the parameter is two', () => {
    expect(sumArray2([ 3, 5 ])).toBe(0)
  })

  it('should return the sum of the values of the parameter, excluding the max and the min', () => {
    expect(sumArray2([ 6, 2, 1, 8, 10 ])).toBe(16)
    expect(sumArray2([ 0, 1, 6, 10, 10 ])).toBe(7) //he modificado el resultado requerido a 7, ya que si hay que descartar el máximo sobran los dos 10
    expect(sumArray2([ -6, -20, -1, -10, -12 ])).toBe(-28)
    expect(sumArray2([ -6, 20, -1, 10, -12 ])).toBe(3)
  })
})
  