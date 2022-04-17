// Ejemplo 5: Atributos con valores por default

class PullRequest {
    constructor(repo, title, lines_changed) {
        this.repo = repo
        this.title = title
        this.lines_changed = lines_changed

        // Atributos con valores por defecto
        this.status = 'OPEN'
        this.dataCreated = new Date() // Esto guarda la fecha actual en la que se inicia el objeto
    }

    // Método
    getInfo() {
        return `
            This PR is in the repo: ${this.repo}
            (status: ${this.status})
            and was created on ${this.dataCreated}

        `
    }
}


// Instanciar Objeto1
const myPR1 = new PullRequest(
    'LaunchX',
    'Mi primer PR',
    100
)

// Instanciar objeto2
const myPR2 = new PullRequest(
    'LaunchX',
    'Mi segundo PR',
    99
)

console.log("Ejemplo 5: Atributos con valores por default")
console.log(myPR1.getInfo())
console.log(myPR2.getInfo())
