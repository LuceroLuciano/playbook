// Ejercicio 4: Modelando objetos de twitter
const twitter = {
    user: {
        user: "Luz",
        userName: "Luz6150",
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
    },    
    
    getUserAndDateJoin(){
        return `
            The twetter count of: ${this.user.user}
            was joined in:  ${this.about.dateJoined}
        `
    },
    getUserToReplyingATwet(){
        return `
            ${this.user.user} replying the next tweet:
            "${this.tweetsAndReplies.tweetText}" 
            of the author: ${this.tweetsAndReplies.author}
        `
    }
}
console.log(twitter)
console.log(twitter.getUserAndDateJoin())
console.log(twitter.getUserToReplyingATwet())