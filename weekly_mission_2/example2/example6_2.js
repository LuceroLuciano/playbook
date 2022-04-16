// Ejemplo 6: Uso de map para convertir todos los nombres de una lista a minusculas
// y mostrar solo las tres primeras letras en una nueva lista
const countries6 = ['Peru', 'Canada', 'Inglad', 'Ecuador', 'Japan']
const countriesFirstThreeLetters = countries6.map((country) =>
    country.toLowerCase().slice(0, 3) // el metodo slice obtiene solo la longitud marcada del string
)

console.log("Ejemplo 6: Uso de map para convertir todos los nombres de una lista a minusculas")
console.log(countriesFirstThreeLetters)