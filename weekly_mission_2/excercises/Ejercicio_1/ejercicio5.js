// Ejercicio 5: Modelando objetos de Facebook
const facebook = {
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
    },
    
    getUserAndPost(){
        return `
            ${this.profile.userName} shared the
            post of ${this.home.post.userPost}
            ----------------------------------------------\n
            POST:
            * Descripcion: ${this.home.post.textPost}
            * Photo: ${this.home.post.picPost}
            * Date: ${this.home.post.datePost}
            * User: ${this.home.post.userPost}
            * Likes: ${this.home.post.likes}
            * Sharing: ${this.home.post.sharing}
        `
    },
    getGeneralInfo(){
        return `
            ${'----'.repeat(10)}
            This is the form of how facebook optaining your info XD 😂\n
            ${this.profile.userName.toUpperCase()} lives in
            ${this.profile.hometown.toUpperCase()} and 
            working in ${this.profile.workPlace.toUpperCase()}
        `
    }
}

console.log(facebook.getUserAndPost())
console.log(facebook.getGeneralInfo())
// console.log(facebook.home.post)