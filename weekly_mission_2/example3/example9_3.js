/*  HERENCA:
*   Nos permite relacionar clases entre si y rehusar sus componentes
 */

// Ejemplo 9: Herencia etre dos clases
class Developer {
    constructor(name, mainLang, stack){
        this.name = name
        this.mainLang = mainLang
        this.stack = stack
    }

    get getName() {
        return this.name
    }
}

console.log("Ejemplo 9: Herencia entre dos clases")

// Instanciar objeto
const luceroDev = new Developer(
    'Lucero',
    'JS',
    ['JS', 'NodeJS', 'Python']
)
console.log(luceroDev)

// Se usa la palabra extends para indicar que heredarás las propiedades de la clase Padre (Developer) en la clase definida.
// Podemos definir una clase vacía y rehusar todos los componentes de la clase padre
class LaunchXStudent extends Developer{

}

// Instanciando objeto de la clase LaunchXStudent
const luceroLaunchxDev = new LaunchXStudent(
    'Luz',
    'JS',
    ['JS', 'NodeJS', 'Python']
)

console.log(luceroLaunchxDev)
console.log(luceroLaunchxDev.getName)