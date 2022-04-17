// Ejemplo 7: Setters para modificar los atributos del objeto

// Clase
class MissionComander {
    constructor(name, mission) {
        this.name = name
        this.mission = mission
        this.students = 0
        this.lives = 0
    }
   
    // Metodo getter
    get getStudents() {
        return this.students
    }

    // Metodo getter
    get getLives() {
        return this.lives
    }

    // Metodo setter
    set setStudents(students) {
        this.students = students
    }

    // Método setter
    set setLives(lives) {
        this.lives = lives
    }
}

// instanciar objeto1
const missionCommanderNode = new MissionComander(
    'Carlo',
    'NodeJS'
)

console.log("Ejemplo 7: Setters para modificar los atributos del objeto")

console.log(missionCommanderNode.getStudents) // 0 por default
console.log(missionCommanderNode.getLives)  // 0 por default

// Actualizar los atributos por medio de los setters
missionCommanderNode.setStudents = 100
missionCommanderNode.setLives = 3

console.log(missionCommanderNode.getStudents)
console.log(missionCommanderNode.getLives)