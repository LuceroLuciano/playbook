// Ejercicio 5: Convirtiendo Objetos a clases
const fb = {
    profile: {
        userName: "Luz",
        picProfile: "patito.jpg",
        picPortada: "clima.jpg",
        bio: "lorem lorem lorem",
        friends: 127,
        hometown: "Canada",
        workPlace: "LaunchX",
        relationStatus: "Single",
        follows: 40,
        following: 80
    },
    home: {
        stories: {
            addToStory: "Coffe.jpg",
            userOfStory: "Perla Perl"
        },
        events: "Week Arduino",
        post: {
            textPost: "lorem lorem",
            picPost: "ADMIRA.jpg",
            datePost: "20-Abril-2022",
            userPost: "Perla Perl",
            likes: 50,
            sharing:50
        }
    },
    notification: {
        nameNotificacion: "someone post in tech grop",
        dateNotificacion: "15-Abril-2022",
        hourNotificacion: "12:08 PM"
    },
    videos: {
        userShareVideo: "userX",
        descriptionVideo: "lorem lorem",
        dateShareVideo: "22-Marzo-2022"
    }
}

// Clase
class Facebook{
    constructor(fb){
        this.fb = fb
    }
    // metodo
    getUserAndPost(){
        return `
            ${this.fb.profile.userName} interesting
            the nex event: ${this.fb.home.events}
            ----------------------------------------------\n            
        `
    }
}

// Instanciar objeto
const fb1 =  new Facebook(fb)
console.log(fb1.getUserAndPost())