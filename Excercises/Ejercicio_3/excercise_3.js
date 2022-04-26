class PullRequest {
    constructor(title, author, branchName, dataCreated, status, repositoryNameAssociated){
        this.title = title
        this.author = author
        this.branchName = branchName
        this.dataCreated = dataCreated
        this.status = status
        this.repositoryNameAssociated = repositoryNameAssociated
    }
    getStatus(){
        return `Status: ${this.status}`
    }

    getTittleAndAuthor(){
        return `${this.title}
                ${this.author}`
    }
}

/*
// Probando la clase 
const pullRequest = new PullRequest(
    "My first Repo",
    "Luz",
    "main",
    "07-Abril-2022",
    "Open",
    "VisualPartner"

)

console.log(pullRequest.getStatus())
console.log(pullRequest) */