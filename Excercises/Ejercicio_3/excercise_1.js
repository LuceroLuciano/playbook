// Clase
class Repo {
    constructor(name, author, language, numbeertOfCommits, start, forks, issues_open, issues_close){
        this.name = name
        this.author = author
        this.language = language
        this.numbeertOfCommits = numbeertOfCommits
        this.start = start
        this.forks = forks
        this.issues_close = issues_close
        this.issues_open = issues_open
    }
    // Metodo de la clase
    getTotalIssues(){
        return this.language;
    }
    
}

/*
// Instanciando un objeto
const repo1 = new Repo(
    "Luz",
    "luz-cero",
    "JS"
)

console.log(repo1.getTotalIssues())
console.log(repo1) */