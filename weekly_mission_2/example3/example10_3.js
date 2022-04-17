// Ejemplo 10: Overrinding methods

// Clase Padre
class Explorer {
    constructor(name, username, mission){
        this.name = name
        this.username = username
        this.mission = mission
    }

    getNameAndUsername(){
        return `
            Explorer: ${this.name},
            username: ${this.username}
        `
    }
}

// Clase Hija
class Viajero extends Explorer {
    constructor(name, username, mission, cycle){
        super(name, username, mission) // SUPER nos ayudara a llamr el constructor padre
        this.cycle = cycle // Agregamos este atributo de la clase Viajero, es exclusiva de esta clase y no de la clase padre        
    }

    getGeneralInfo(){
        let nameAndUsername = this.getNameAndUsername() // llamamos el método de a clase padre
        // nameAndUsername es una variable de esta funcion, no necesitas usar this para referenciarla
        return `${nameAndUsername}, Ciclo: ${this.cycle}`        
    }
}

// Instanciando objeto
const viajero1 = new Viajero('Lucero', 'LaunchX', 'Node JS', 'Abril 22')

console.log(viajero1)
console.log(viajero1.getNameAndUsername())
console.log(viajero1.getGeneralInfo())


// Instanciar objeto a clase padre
/*const explorer1 = new Explorer(
    'lu', 
    'ViajeritaDeLaunchX', 
    'Nodejssssss'
)
console.log(explorer1)
console.log(explorer1.getNameAndUsername()*/