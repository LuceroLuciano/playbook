// Ejemplo 10: uso de every nos ayuda a validar todos los elementos 
// de una lista, si todos cumplen con la validación que indiques 
// te regresa true, de lo contrario false

const names10 = ['Explorer 1', 'Explorer 2', 'Explorer 3', 'Explorer 4']
const areAllStr = names10.every((name) => typeof name === 'string') //every
console.log("Ejemplo 10: Son todos los nombres string: " + areAllStr)

/*
*   Diferencia entre == y ===
*
*   == compara los valores. Ejemplo:
*       let numberOne = 1
*       let numberTwo = "1"
*       console.log(numberOne == numberTwo)
*
*   El resultado sera: true
*   
*
*   === Compara los tipos de datos. Ejemplo:
*       let numberOne = 1    // int
*       let numberTwo = "1"  // string
*       console.log(numberOne === numberTwo
*
*   El resultado sera: false
*/