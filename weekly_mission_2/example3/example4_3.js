//  Ejemplo 4: Métodos en los objetos.

class Repository {
    constructor(name, author, language, stars) {
        this.name = name
        this.author = author
        this.language = language
        this.stars = stars
    }

    // Metodo get es una función que ejecutará cualquier objeto instanciado de esta clase
    getInfo() {
        return `
            Repository ${this.name.toUpperCase()}
            has ${this.stars}
        `
    }
}

// Instanciar objeto1
const repositoryInfo = new Repository(
    'Luz',
    'Lucero',
    ['Python', 'JS', 'NodeJS'],
    '1000'
)

console.log(repositoryInfo)

// Acceder al metogo getInfo()
console.log(repositoryInfo.getInfo())