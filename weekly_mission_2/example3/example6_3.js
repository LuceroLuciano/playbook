// Ejemplo 6: Getters para acceder a los atributos del objeto.
class Ninja {
    constructor(name, age, ninjaRank) {
        this.name = name
        this.age = age
        this.ninjaRank = ninjaRank
        this.aledea = 'Konoha'
        this.dateCreated = new Date()
    }

    // Metodo1
    getInfo() {
        return `
            NINJA, ${this.name.toUppeCase()}
            ${'---'.repeat(10)}
            Edad: ${this.age}
            Rango ninja: ${this.ninjaRank.rank}
            Ascenso a chunin: ${this.ninjaRank.promotionToChunin}
            Aldea: ${this.aledea}
            ${'---'.repeat(10)}
            Fecha de creación: ${this.dateCreated}
        `
    }
    // Metodo2
    get getAldea() {
        return this.aledea
    }

    // Metodo3
    get getNinjaRank() {
        return `
            Rango ninja: ${this.ninjaRank.rank}
            Ascenso a chunin: ${this.ninjaRank.promotionToChunin}
            Registro ninja: ${this.ninjaRank.record}
        `
    }
}


// Instanciar objeto 1
const itachi = new Ninja(
    'Itachi', 
    '21', 
    {
        rank: 'Ambu',
        record: '012110',
        promotionToChunin: '10 años'
    }
)

const obito = new Ninja(
    'Obito', 
    '31', 
    {
        rank: 'Chunin',
        record: '010886',
        promotionToChunin: '11 años'
    }
)

console.log(itachi.getAldea)
console.log(itachi.getNinjaRank)

console.log(obito.getAldea)
console.log(obito.getNinjaRank)