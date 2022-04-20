// Ejercicio 3: Modelando pull_request de GitHub en objetos

const pullRequest = {
    tittle: "Mi primer pull request",
    author: "Lucero",
    branchName: "main",
    dataCreated: "07-Abril-2022",
    status: "Open",
    repositoryNameAssociated: "visualpartnership",

    getStatus(){
        return `Status: ${this.status}`
    },

    getTittleAndAuthor(){
        return `
            Tittle PullRequest: ${this.tittle}
            Author: ${this.author}        
        `
    }
}

console.log(pullRequest.getStatus())
console.log(pullRequest.getTittleAndAuthor())




