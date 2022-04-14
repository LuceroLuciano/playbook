// Ejemplo 4: Objeto con metodos
const pet = {
    name: "Raspi",
    // Esta es una funcion que se guarda como propiedad
    sayHello: function(){
        // this.name hace refferencia a la propiedad del objeto
        console.log(`${this.name} te saluda en español!!!`)
    }
}

console.log("Ejemplo 4: Objeto con metodos")
pet.sayHello()