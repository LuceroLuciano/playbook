// Ejemplo 14: Uso de some
const booleans = [true, true, false, true]
let index 

// recorre toda la lista con some
const areSomeTrue = booleans.some((boolean, i) => {
    index = i
    return boolean === false
})

console.log(
    'Alguno de los elementos en el array es false:',
    areSomeTrue ? 'YES': 'NO',
    'y es elemento en la posicion:', index
)