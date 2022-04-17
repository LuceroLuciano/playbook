// Ejemplo 12:_ Uso de find en una lista de objetos
const scores = [
    { name: 'A', score: 95 },
    { name: 'M', score: 80 },
    { name: 'E', score: 50 },
    { name: 'M', score: 85 },
    { name: 'J', score: 100 },
]

// Encontrar el primer valor mayor a 80
const itemWithScoreAbove80 = scores.find(user => user.score > 80)
console.log(itemWithScoreAbove80)
console.log("Name score found:", itemWithScoreAbove80)