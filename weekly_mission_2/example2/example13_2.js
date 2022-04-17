// Ejemplo 13: Uso de findIndex.

const names = ['Explorer 1', 'Explorer 2', 'Explorer 3']
// Encuentra el primer elemento donde la palabra es mayor a 7
const result = names.findIndex(name => name.length > 7)
console.log("Primer elemento cuya palabra sea mayor a 7 esta en la posicion", result)