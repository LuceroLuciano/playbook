// Ejemplo 8: Métodos static nos ayudan a escribir métodos en una 
// clase que podemos usar sin necesidad de instanciar algún objeto.

class Ninja {
    constructor(name, age, ninjaRank, techniques) {
        this.name = name
        this.age = age
        this.ninjaRank = ninjaRank
        this.techniques = techniques
        this.aldea = null
        this.istAlive = true
    }

    // Método getter
    getInfo() {
        return `
            NINJA, ${this.name.toUpperCase()}
            ${'----'.repeat(10)}
            Edad: ${this.age}
            Rango ninja: ${this.ninjaRank.rank}
            Ascenso a chūnin: ${this.ninjaRank.promotionToChunin}
            Aldea: ${this.aldea}
            ${'----'.repeat(10)}
            Fecha de ceación: ${this.dateCreated}
        `
    }

    // Método getter
    get getStatus() {
        return this.itsAlive
    }

    // Método getter
    get getAldea() {
        return this.aldea
    }

    // Método setter
    set setStatus(status) {
        this.itsAlive = status
    }   

    // Método setter
    set setAldea(aldea) {
        this.aldea = aldea
    }

    // Método static
    static getTechniques(techniques) {
        let template = ``
        techniques.forEach(function(techniques, index) {
            template += `${++index}.${techniques}\n`
        })
        return template
    }
}

const rocklee = new Ninja(
    'Rock Lee',
    '32',
    {
        rank: 'Jonin',
        record: '012561',
        promotionToChunin: '15 años'
    },
    ['Gran Remolino de la Hoja', 'Loto Inverso', 'Loto Primario', 'Puño Borracho']

)


console.log('Técnicas secretas de', rocklee.name)
console.log(Ninja.getTechniques(rocklee.techniques))