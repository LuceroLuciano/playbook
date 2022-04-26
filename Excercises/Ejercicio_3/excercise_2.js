// Ejercicio 2: Definicion de clases
class Issue {
    constructor (tittle, repositoryNameAssociated, status, numberOfComments, lables, author, dataCreated, lastUpdate) {
        this.tittle = tittle
        this.repositoryNameAssociated = repositoryNameAssociated
        this.status = status
        this.numberOfComments = numberOfComments
        this.lables = lables
        this.author = author
        this.dataCreated = dataCreated
        this.lastUpdate = lastUpdate
    }   

    getTitleAndAuthor(){
        return `${this.tittle}
                ${this.author}`
            
    }

    getGeneralInfo(){
        return `${this.tittle}
                ${this.author}
                ${this.dataCreated}`
    }
}

/*
// Descomenta este codigo para probrar la clase
const issue1 = new Issue(
    "Practicas de nodeJS",
    "LaunchX",
    "Open",
    30,
    45,
    "innovaccion-Virtual",
    "Marzo 2022",
    "Abril 2022"
)

console.log(issue1.getTitleAndAuthor())
console.log(issue1.getGeneralInfo())
console.log(issue1) */

console.log(Issue)