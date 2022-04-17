// Ejemplo 7: Setters para modificar los atributos del objeto

// Clase
class Ninja {
    constructor(name, age, ninjaRank) {
        this.name = name
        this.age = age
        this.ninjaRank = ninjaRank
        this.aldea = null
        this.itsAliive = true
    }

    // Metodo getter
    getInfo() {
        return `
            NINJA, ${this.name.toUpperCase()}
            ${'---'.repeat(10)}
            Edad: ${this.age}
            Rango ninja: ${this.ninjaRank.rank}
            Ascenso a chunin: ${this.ninjaRank.promotionToChunin}
            Aldea: ${this.aldea}
            ${'---'.repeat(10)}
            Fecha de creacion: ${this.dateCreated}
        `
    }
    
    // Metodo getter
    get getStatus() {
        return this.itsAliive
    }

    // Metodo getter
    get getAldea() {
        return this.aldea
    }

    // Metodo setter
    set setStatus(status) {
        this.itsAliive = status
    }

    // Método setter
    set setAldea(aldea) {
        this.aldea = aldea
    }
}

// instanciar objeto1
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
const rocklee = new Ninja(
    'Rock Lee',
    '32',
    {
        rank: 'Jonin',
        record: '012561',
        promotionToChunin: '15 años'
    }
)

itachi.setAldea = 'Konoha'
itachi.setStatus = false

console.log(itachi)
console.log('---'.repeat(10))
console.log(`[${itachi.name}] getAldea:`, itachi.getAldea)
console.log(`[${itachi.name}] getStatus:`, itachi.getStatus)

console.log('\n')

rocklee.setAldea = 'Konoha'
rocklee.setStatus = true

console.log(rocklee)
console.log('----'.repeat(10))
console.log(`[${rocklee.name}] getAldea:`, rocklee.getAldea)
console.log(`[${rocklee.name}] getStatus:`, rocklee.getStatus)