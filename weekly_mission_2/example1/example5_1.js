// Ejemplo 5: Objeto con metodo que recibe parametros
const myPet = {
    name: "Woopa", // Es el nombre del ajolonauta 
    // funcion que recibe el parametro
    sayHelloToMyPet: function(yourPet){
        console.log(`${this.name} say's hello to ${yourPet} 💟!!!`)
    }
}

console.log("Ejemplo 5: Objeto con método que recibe parametros")
myPet.sayHelloToMyPet("Raspi")