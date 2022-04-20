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
    },

    getUsernameOriginAndDestination(){
        return `
            ${this.userName} 
            was in ${this.ride.location}
            and she want to go to ${this.ride.destination}
        `
    },
     getInfoDriver(){
         return `
            ${"---".repeat(15)}
            Info about the driver's uber:
            Name: ${this.ride.driverUber.driverName}
            Age: ${this.ride.driverUber.age}
            Male: ${this.ride.driverUber.male}
            From: ${this.ride.driverUber.from}
         `
     },
     getInfoCarOfUser(){
        return `
            ${"---".repeat(15)}
            The Uber of ${this.userName} is the
            color ${this.ride.carUber.color} with placas
            ${this.ride.carUber.placas}
        `
     }
}

console.log(uber.getUsernameOriginAndDestination())
console.log(uber.getInfoDriver())
console.log(uber.getInfoCarOfUser())