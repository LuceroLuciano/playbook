// Ejemplo 15: Uso de sort para ordenar elementos.
const products = ['Milk', 'Coffe', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log("Elementos ordenados usando SORT")
// Ordena los elementos de la lista products
console.log(products.sort())

// Y si dentro del array hubiera datos en minusculas?
const products2 = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'apple', 'Carrot', 'sugar', 'milk']
// Ordena primero los elemetos con letras máyusculas porque tienen más prioridad
console.log(products2.sort())