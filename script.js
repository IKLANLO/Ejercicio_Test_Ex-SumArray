/**
 * Devuelve la suma de todos los número de un array recibido por argumentos, excluye de la suma el valor más bajo y el más alto
 * Si recibimos null, undefined, array vacío o un array con un número o dos número, deberá devolverse 0
 *
 * OBLIGATORIO: USA TESTS!
 *
 * Hazlo de dos maneras distintas:
 * 1- Como quieras
 * 2- Sin el método de Array "sort" ni con "reduce"
 *
 * Datos para pruebas: input | ouput
 * sumArray(null) | 0
 * sumArray([ ]) | 0
 * sumArray([ 3 ]) | 0
 * sumArray([ 3, 5 ]) | 0
 * sumArray([ 6, 2, 1, 8, 10 ]) | 16
 * sumArray([ 0, 1, 6, 10, 10 ]) | 17
 * sumArray([ -6, -20, -1, -10, -12 ]) | -28
 * sumArray([ -6, 20, -1, 10, -12 ]) | 3
 */

function sumArray(array) {
  let sum = 0, newArray = []
  if (array === null || array === undefined || array.length <= 2 ){
    return sum
  } else {
    const max = Math.max(...array)
    const min = Math.min(...array)
    array.forEach((a) => {
      if(a < max && a > min){
        if (newArray.length === 0){
          newArray = [a]
        } else {
          newArray.push(a)
        }
      } 
    })
    
    for(let i = 0; i < newArray.length; i++){
      sum += newArray[i]
    }
    return sum
  }
}

function sumArray2(array) {
  let sum2 = 0, newArray2 = []
  if (array === null || array === undefined || array.length <= 2 ){
    return sum2
  } else {
    const max = Math.max(...array)
    const min = Math.min(...array)
    for (let i = 0; i < array.length; i++){
      if(array[i] < max && array[i] > min){
        if (newArray2.length === 0){
          newArray2 = [array[i]]
        } else {
          newArray2.push(array[i])
        }
      } 
    }

    for(let i = 0; i < newArray2.length; i++){
      sum2 += newArray2[i]
    }
    return sum2
  }
}
