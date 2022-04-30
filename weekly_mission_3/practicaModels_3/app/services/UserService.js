const User = require('./../models/User')

class UserService {
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }

    static getInfo(id, usernamem, name, bio){
        return `
                ${this.id}
                ${this.username}
                ${this.name}
                ${this.bio}
                `
    }
}

module.exports = UserService