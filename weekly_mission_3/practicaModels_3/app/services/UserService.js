const User = require('./../models/User')

class UserService {
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }

    static getInfo(objectUser){
        return [objectUser.id, objectUser.username, objectUser.name, objectUser.bio]                
    }

    static updateUserUsername(user, newUser){
        return user.username = newUser
    }
}

module.exports = UserService