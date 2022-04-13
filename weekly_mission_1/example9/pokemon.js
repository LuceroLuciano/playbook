class Pokemon {
    constructor(name){
        this.name = name
    }

    //function sayHello
    sayHello(){
        console.log(`Mi pokemon ${ this.name } te saluda!!!`)
    }

    //functionSayMessage
    sayMessage(){
        console.log(`Mi pokemon ${ this.name } dice: Heey!`)
    }
}
// export moduls
module.exports = Pokemon