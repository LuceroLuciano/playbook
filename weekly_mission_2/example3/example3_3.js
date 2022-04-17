// Ejemplo 3: Instanciar un objeto con atributos.

// Crear clase 
class Ninja {
    // atributos que tiene el objeto
    constructor(name, age, ninjaRank) {
        this.name = name
        this.age = age
        this.ninjaRank = ninjaRank
    }
}

// Intnaciar objeto1
const itachi = new Ninja(
    'Itachi',
    '21',
    {
        rank: 'Ambu',
        record: '012110',
        promotionToChunin: '10 años'
    }
)

// Instancar objeto2
const obito = new Ninja(
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