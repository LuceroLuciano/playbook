// Ejemplo 3: Instanciar un objeto con atributos.

// Crear clase 
class Student {
    // El constructor nos permite instanciar un objeto y asignarle atributos, this nos ayuda a realizar esto.
    constructor(name, age, subjects) {
        this.name = name
        this.age = age
        this.subjects = subjects
    }
}

// Crear un objeto de la clase Student (Instanciar objeto1)
const luceroStudent = new Student(
    'Lucero',
    '19',
    ["NodeJS", "Python"]
)

console.log("Ejemplo: 3 Instanciar un objeto con atributos")
console.log(luceroStudent)