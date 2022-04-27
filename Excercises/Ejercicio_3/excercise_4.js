// Ejercicio 4: Conviertiendo objetos a definición de clases
// Objeto
const twitter = {
    user: {
        user: "Luz",
        userName: "Luz-Zero",
        bio: "Explorert in the mission LaunchX",
        following: 457,
        followers: 96,
        pic: "img.jpg"
    },
    about: {
        dateJoined: "Agosto 2018"
    },
    tweets: {
        author: "moon21",
        tweetText: "7 Books To Understand Your Brain",
        likes: 778,
        retweet: 226,
        comment:  {
            replyingTo: "moon21",
            userReplying: "Luz",
            commentTweet: "These Books are amazing"
        },
        share: ['WhatsApp', 'Gmail', 'Meta', 'Copy Link' ]
    },
    tweetsAndReplies: {
        userRetweeted: "Luz",
        author: "moon21",
        tweetText: "7 Books To Understand Your Brain",
        likes: 778,
        retweet: 226
    }    
}

// Clase
class Twitter {
    constructor (twitter){
        this.twitter = twitter
    }
    getUsernameAndFollowers(){
        return `
            ${this.twitter.user.userName},                
            has ${this.twitter.user.followers} followers
            `
    }
}


// Istanciando un objeto
const twitter1 = new Twitter(twitter)
console.log(twitter1.twitter)
console.log(twitter1.getUsernameAndFollowers())
