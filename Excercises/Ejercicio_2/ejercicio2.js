// Ejercicio 2: Modelando el Issue de GitHub en objetos

const issue = {
    title: "07 Live 1 Semana 3 [Lunes 18 de Abril 8 PM]",
    repositoryNameAssociated: "LaunchX- InnovaccionVirtual",
    status: "Open",
    numberOfComments: "74",
    lables: ['Finalizado', 'Live1', 'Semana-3'],
    author: "carlogilmar",
    dataCreated: "17-Abril-2022",
    lastUpdate: "3 Days ago",

    getTitleAndAuthor: function(){
        return `
            Tittle Issue:  ${this.title}
            Author: ${this.author}
        `
    },

    getGeneralInfo: function(){
        return `
            ------------------------------------------------------------\n
            This issue: ${this.title}
            was create by ${this.author},
            The ${this.dataCreated} 
        `
    }
}

console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())
// console.log(issue)
