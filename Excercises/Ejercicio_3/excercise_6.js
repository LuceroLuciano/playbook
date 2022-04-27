// Ejercicio 6: Convietiendo objetos a definiciones de clases

// Objeto
const uber = {
    userName: "Vicki",
    pic: "img.jpg",
    ride: {
        reserveDay: "20-Abril-2022",
        reserveTime: "12:40 PM",
        location: "Av. Central Tokio",
        destination: "Narita Airport",
        distance: "40km",
        carUber: {
            placas: "30MR-DDRD-4287",
            color: "red",
            año: 2020,
            modelo: "Nissan"
        },
        driverUber: {
            driverName: "Jesse",
            age: 40,
            male: "Gender",
            from: "MT City"
        }
    },
    food: {
        orderDay: "20-Abril-2022",
        orderTime: "12:40 PM",
        orderFoot: "Hamburgers without lettuce",
        location: "Av. Central Tokio",
        destination: "Narita Airport",
        distance: "40km",
    }
}

// clase
class Uber {
    constructor(uber){
        this.uber = uber
    }
    getUserNameOriginAndDestination(){
        return `
        ${this.uber.userName} 
        was in ${this.uber.ride.location}
        and she want to go to ${this.uber.ride.destination}
        `
    }
}

// Instanciando objeto
const uber1 = new Uber(uber)
console.log(uber1.getUserNameOriginAndDestination())