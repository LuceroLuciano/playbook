// Ejemplo 16: Ordenando una lista de objetos.
const users = [
    { name: 'A', age: 150 },
    { name: 'B', age: 50 },
    { name: 'C', age: 100 },
    { name: 'D', age: 22 }
]

// 50, 100, 
users.sort((a, b) => {
    if (a.age < b.age) {
        console.log(a.age, '<', b.age, ':', -1)
        return -1
    }
    if (a.age > b.age) {
        console.log(a.age, '>', b.age, ':', 1)
        return 1
    }
    return 0
})

console.log("Ordenando una lista de objetos por la edad")
console.log(users) // sorted ascending