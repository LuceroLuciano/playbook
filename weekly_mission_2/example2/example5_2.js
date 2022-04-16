// Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a mayusculas y crear una nueva lista
const names = ['Lucero', 'Carlos', 'Maria', 'Juan', 'Jesus']
// recorrer la lista, convertir los elementos a mayusculas y agregarlos a nueva lista
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)



/*
// Recorrer la lista y mostrar los elementos
const namesToUpperCase2 = names.forEach((name) => console.log(name.toUpperCase()))
*/