//  Ejemplo 4: Métodos en los objetos.

class Ninja {
    constructor(name, age, ninjaRank) {
        this.name = name
        this.age = age
        this.ninjaRank = ninjaRank
    }

    // Metodo
    getInfo() {
        return `
            NINJA, ${this.name.toUpperCase()}
            ${'---'.repeat(10)}
            Edad: ${this.age}
            Rango ninja: ${this.ninjaRank.rank}
            Ascenso a chunin: ${this.ninjaRank.promotionToChunin}
        `
    }
}

// Instanciar objeto1
const itachi = new Ninja (
    'Itachi',
    '21',
    {
        rank: 'Ambu',
        record: '012110',
        promotionToChunin: '10 años'
    }
)

// Instanciar objeto2
const obito = new Ninja (
    'Obito',
    '31',
    {
        rank: 'Chunin',
        record: '010886',
        promotionToChunin: '11 años'
    }
)

console.log(itachi)
console.log(obito)

// Acceder al metogo getInfo()
console.log(itachi.getInfo())
console.log(obito.getInfo())