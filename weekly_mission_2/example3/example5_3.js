// Ejemplo 5: Atributos con valores por default

class Ninja {
    constructor(name, age, ninjaRank) {
        this.name = name
        this.age = age
        this.ninjaRank = ninjaRank

        // Atributos con valores por defecto
        this.aldea = 'Konoha'
        this.dataCreated = new Date() // Esto guarda la fecha actual en la que se inicia el objeto
    }

    // Método
    getInfo() {
        return `
            NINJA, ${this.name.toUpperCase()}
            ${'---'.repeat(10)}
            Edad: ${this.age}
            Rango ninja: ${this.ninjaRank.rank}
            Ascenso a chunin: ${this.ninjaRank.promotionToChunin}
            Aldea: ${this.aldea}
            ${'---'.repeat(10)}
            Fecha de creación: ${this.dataCreated}
        `
    }
}


// Instanciar Objeto1
const itachi = new Ninja(
    'Itachi',
    '21',
    {
        rank: 'Ambu',
        record: '012110',
        promotionToChunin: '10 años'
    }
)

// Instanciar objeto2
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

// Acceder al metodo getInfo()
console.log(itachi.getInfo())
console.log(obito.getInfo())