// Ejemplo 7: Uso de filter para filtrar una lista de elemento
const countries7 = ['Finland', 'Canada', 'Ingland', 'Ecuador', 'Japan']
// Filtra los elementos de la lista y muestra solo los elementos que incluyan land
const countriesContainingLand = countries7.filter((country) => //Esta es una función
    country.includes('land')
)

console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos")
console.log(countriesContainingLand)

// Filtra los elementos que tengan ia
const countriesEndByia = countries7.filter((country) => country.endsWith('ia'))
console.log("Ejemplo 7: Paises que terminan en ia")
console.log(countriesEndByia)

